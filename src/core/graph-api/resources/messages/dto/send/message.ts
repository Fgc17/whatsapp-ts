import type { WaOutgoingContactsMessage } from "./payloads/contacts";
import type { WaOutgoingInteractiveMessage } from "./payloads/interactive";
import type { WaOutgoingLocationMessage } from "./payloads/location";
import type {
	WaOutgoingAudioMessage,
	WaOutgoingDocumentMessage,
	WaOutgoingImageMessage,
	WaOutgoingStickerMessage,
	WaOutgoingVideoMessage,
} from "./payloads/media";
import type { WaOutgoingReactionMessage } from "./payloads/reaction";
import type { WaOutgoingTemplateMessage } from "./payloads/template";
import type { WaOutgoingTextMessage } from "./payloads/text";

export interface WaOutgoingMessage {
	text?: WaOutgoingTextMessage;
	contacts?: WaOutgoingContactsMessage;
	reaction?: WaOutgoingReactionMessage;
	location?: WaOutgoingLocationMessage;
	audio?: WaOutgoingAudioMessage;
	document?: WaOutgoingDocumentMessage;
	image?: WaOutgoingImageMessage;
	video?: WaOutgoingVideoMessage;
	sticker?: WaOutgoingStickerMessage;
	interactive?: WaOutgoingInteractiveMessage;
	template?: WaOutgoingTemplateMessage;
}

export type WaMessageType = keyof WaOutgoingMessage;
