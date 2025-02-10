import type { WaIncomingContactObject } from "src/core/graph-api/webhooks/application/fields/messages/values/contacts";
import type { WaOutgoingMessage } from "./message";

export type WhatsappSendMessageRequestConfig = {
	to: string;
	preview_url?: boolean;
	context?: string;
	biz_opaque_callback_data?: string;
	recipient_type?: "individual";
	messaging_product?: "whatsapp";
};

export type WhatsappSendMessageRequestBody<T extends keyof WaOutgoingMessage> =
	{
		type: T;
	} & WhatsappSendMessageRequestConfig &
		Record<T, WaOutgoingMessage[T]>;

export type WhatsappSendMessageResponse = {
	messaging_product: "whatsapp";
	contacts: WaIncomingContactObject[];
	messages: Array<{
		id: string;
	}>;
};
