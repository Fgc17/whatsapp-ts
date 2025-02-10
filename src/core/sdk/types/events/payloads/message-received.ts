import type { AnyType } from "core/utils/types";
import type { WaIncomingMessageType } from "src/core/graph-api/webhooks/application/fields/messages/values/messages";

export interface BaseMessageReceivedEventPayload {
	id: string;
	type: WaIncomingMessageType;
	timestamp: number;
	metadata: {
		forwarded?: boolean;
		frequentlyForwarded?: boolean;
	};
}

export type MessageReceivedEventPayload = BaseMessageReceivedEventPayload & {
	chatId: string;
	text: string | null;
	reply?: string;
	interaction?: {
		button?: {
			id: string | null;
			title: string;
			payload: string | null;
		};
		selectedOption?: {
			id: string;
			title: string;
			description: string;
		};
		flowResponse?: Record<string, AnyType>;
	};
	media?: {
		id: string;
		caption: string | null;
		mime_type: string;
		type: "audio" | "document" | "image" | "video";
		filename?: string;
		sha256?: string;
	};
};
