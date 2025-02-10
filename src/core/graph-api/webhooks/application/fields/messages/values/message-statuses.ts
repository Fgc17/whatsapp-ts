import type { WaIncomingErrors } from "./errors";

export type ConversationType =
	| "authentication"
	| "service"
	| "utility"
	| "marketing"
	| "referral_conversation";

export type WaIncomingMessageStatus = "delivered" | "read" | "sent";

export type WaIncomingMessageStatuses = Array<{
	id: string;
	biz_opaque_callback_data: string;
	conversation: {
		id: string;
		origin: {
			type: ConversationType;
		};
		expiration_timestamp: number;
	};
	errors: WaIncomingErrors;
	pricing: {
		category: ConversationType;
		pricing_model: "CBP";
	};
	recipient_id: string;
	status: WaIncomingMessageStatus;
	timestamp: number;
}>;
