import type { WaIncomingMessages } from "core/graph-api/webhooks/application/fields/messages/values/messages";
import type { MessageReceivedEvent } from "../parser";

export function mediaParser(message: WaIncomingMessages[0]) {
	const hasMedia =
		message.audio || message.document || message.video || message.image;

	if (!hasMedia) {
		return null;
	}

	const mediaId = (message.audio?.id ??
		message.document?.id ??
		message.image?.id ??
		message.video?.id) as string;

	const mime_type = (message.audio?.mime_type ??
		message.document?.mime_type ??
		message.image?.mime_type ??
		message.video?.mime_type) as string;

	const mediaTypes = ["audio", "document", "image", "video"] as const;

	// biome-ignore lint/style/noNonNullAssertion: one of the media types will be present
	const media_type = mediaTypes.find(
		(v) => message[v as keyof typeof message],
	)!;

	const sha256 =
		message.image?.sha256 ?? message.document?.sha256 ?? message.video?.sha256;

	const caption =
		message.document?.caption ??
		message.image?.caption ??
		message.video?.caption ??
		null;

	const filename = message.document?.filename ?? message.video?.filename;

	const media: MessageReceivedEvent["media"] = {
		id: mediaId,
		type: media_type,
		caption,
		mime_type,
		sha256,
		filename,
	};

	return media;
}
