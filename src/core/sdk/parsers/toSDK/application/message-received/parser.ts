import type { WaIncomingMessages } from "src/core/graph-api/webhooks/application/fields/messages/values/messages";
import type { Defined } from "core/utils/types";
import type { BaseMessageReceivedEventPayload } from "core/sdk/types/events/payloads/message-received";
import type { WaSDKEventPayload } from "core/sdk/types/events/event";
import { mediaParser } from "./utils/media";
import { textParser } from "./utils/text";
import { interactionParser } from "./utils/interaction";

export type MessageReceivedEvent = Defined<
	WaSDKEventPayload["application"]["messageReceived"]
>[0];

export function parseMessageReceivedEventToSDK(
	message: WaIncomingMessages[0],
): MessageReceivedEvent {
	const chatId = message.from;

	const basePayload: BaseMessageReceivedEventPayload = {
		id: message.id,
		type: message.type,
		timestamp: message.timestamp,
		metadata: {
			forwarded: message.context?.forwarded,
			frequentlyForwarded: message.context?.frequently_forwarded,
		},
	};

	const media = mediaParser(message);

	const text = textParser(message);

	const interaction = interactionParser(message);

	const payload: MessageReceivedEvent = {
		...basePayload,
		...(interaction && { interaction }),
		...(media && { media }),
		text,
		chatId,
	};

	return payload;
}
