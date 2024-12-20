import { WhatsappApplicationWebhookBody } from "graph-api/types/webhooks/application/webhook";
import { WaSDKEvent } from "sdk/types/events/event";
import { parseMessageReceivedEventToSDK } from "./application/message-received";
import {
  WhatsappFlowPingResponse,
  WhatsappFlowWebhookBody,
} from "graph-api/types/webhooks/flows/webhook";
import { decryptFlowBody } from "sdk/security/decrypt-flow-body";
import { verifyHub } from "sdk/security/verify-hub";
import { verifySignature } from "sdk/security/verify-signature";

const ensureFilled = (v: any[]) => (v.length ? v : undefined);

export async function webhook(request: Request) {
  const isHealthCheck = request.method === "GET";
  if (isHealthCheck) {
    const challenge = verifyHub(request);

    if (!challenge) {
      throw "Invalid request";
    }

    const event: WaSDKEvent<"healthCheck"> = {
      type: "healthCheck",
      payload: challenge,
    };

    return event;
  }

  const rawBody = await request.text();

  const body = JSON.parse(rawBody) as
    | WhatsappApplicationWebhookBody
    | WhatsappFlowWebhookBody;

  const isMessageWebhook = "entry" in body;
  if (isMessageWebhook) {
    const isSignatureValid = verifySignature(request, rawBody);

    if (!isSignatureValid) {
      throw "Invalid request";
    }

    const changes = body.entry.flatMap((entry) => entry.changes);

    const messageFields = changes.filter(
      (change) => change.field === "messages"
    );

    const messageReceivedEvents = messageFields
      .flatMap((change) => change.value.messages)
      .filter(Boolean)
      .map((message) => parseMessageReceivedEventToSDK(message!));

    const event: WaSDKEvent<"application"> = {
      type: "application",
      payload: {
        messageReceived: ensureFilled(messageReceivedEvents),
      },
    };

    return event;
  }

  const isFlowWebhook = "encrypted_flow_data" in body;
  if (isFlowWebhook) {
    const decryptedBody = decryptFlowBody(body);

    const pingResponse: WhatsappFlowPingResponse = {
      data: {
        status: "active",
      },
    };

    const event: WaSDKEvent<"flowExchange"> = {
      type: "flowExchange",
      payload: {
        ...decryptedBody,
        pingResponse,
      },
    };

    return event;
  }

  throw "Invalid request";
}
