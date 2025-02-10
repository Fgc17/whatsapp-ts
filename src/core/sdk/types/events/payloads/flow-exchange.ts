import type {
	WhatsappFlowDecryptedWebhookBody,
	WhatsappFlowEncryptionData,
	WhatsappFlowPingResponse,
} from "src/core/graph-api/index";

export type WaSDKFlowPayload = WhatsappFlowDecryptedWebhookBody;

export type WaSDKFlowDecryptedWebhookBody = {
	payload: WaSDKFlowPayload;
	encryptionMetadata: WhatsappFlowEncryptionData;
};

export type WaSDKFlowExchangeEventPayload = WaSDKFlowDecryptedWebhookBody & {
	pingResponse: WhatsappFlowPingResponse;
};
