import {
  WhatsappFlowDecryptedWebhookBody,
  WhatsappFlowEncryptionData,
  WhatsappFlowPingResponse,
} from "graph-api/index";

export type WaSDKFlowPayload = WhatsappFlowDecryptedWebhookBody;

export type WaSDKFlowDecryptedWebhookBody = {
  payload: WaSDKFlowPayload;
  encryptionMetadata: WhatsappFlowEncryptionData;
};

export type WaSDKFlowExchangeEventPayload = WaSDKFlowDecryptedWebhookBody & {
  pingResponse: WhatsappFlowPingResponse;
};
