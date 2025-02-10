import type {
	WaIncomingMessages,
	WhatsappApplicationWebhookBody,
	WhatsappFlowEncryptedWebhookBody,
	WhatsappFlowPingResponse,
} from "src/core/graph-api";
import { decryptFlowBody } from "src/core/sdk/security/decrypt-flow-body";
import { verifyHub } from "src/core/sdk/security/verify-hub";
import { verifySignature } from "src/core/sdk/security/verify-signature";
import type { WaSDKEvent } from "src/core/sdk/types/events/event";
import { parseMessageReceivedEventToSDK } from "./application/message-received/parser";
import type { AnyType } from "core/utils/types";

const ensureFilled = (v: AnyType[]) => (v.length ? v : undefined);

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
		| WhatsappFlowEncryptedWebhookBody;

	const isMessageWebhook = "entry" in body;
	if (isMessageWebhook) {
		const isSignatureValid = verifySignature(request, rawBody);

		if (!isSignatureValid) {
			throw "Invalid request";
		}

		const changes = body.entry.flatMap((entry) => entry.changes);

		const messageFields = changes.filter(
			(change) => change.field === "messages",
		);

		const messageReceivedEvents = messageFields
			.flatMap((change) => change.value.messages)
			.filter(Boolean)
			.map((message) =>
				parseMessageReceivedEventToSDK(message as WaIncomingMessages[0]),
			);

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
