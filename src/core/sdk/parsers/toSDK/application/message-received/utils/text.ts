import type { WaIncomingMessages } from "core";
import type { MessageReceivedEvent } from "../parser";

export function textParser(message: WaIncomingMessages[0]) {
	const text: MessageReceivedEvent["text"] =
		message.text?.body ??
		message.button?.text ??
		message.interactive?.button_reply?.title ??
		message.interactive?.list_reply?.title ??
		message.document?.caption ??
		null;

	return text;
}
