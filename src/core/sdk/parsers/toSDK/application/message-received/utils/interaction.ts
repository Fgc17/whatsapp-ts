import type { WaIncomingMessages } from "core";
import type { MessageReceivedEvent } from "../parser";

export function interactionParser(message: WaIncomingMessages[0]) {
	if (!message.interactive) return null;

	const button =
		message.interactive?.button_reply || message.button
			? {
					button: {
						id: message.interactive?.button_reply?.id ?? null,
						title: (message.button?.text ??
							message.interactive.button_reply?.title) as string,
						payload: message.button?.payload ?? null,
					},
				}
			: {};

	const list = message.interactive.list_reply
		? {
				selectedOption: {
					id: message.interactive.list_reply.id,
					title: message.interactive.list_reply.title,
					description: message.interactive.list_reply.description,
				},
			}
		: {};

	const flowResponse = message.interactive.nfm_reply
		? {
				flowResponse: JSON.parse(
					message.interactive.nfm_reply.response_json as string,
				),
			}
		: {};

	const interaction: MessageReceivedEvent["interaction"] = {
		...button,
		...list,
		...flowResponse,
	};

	return interaction;
}
