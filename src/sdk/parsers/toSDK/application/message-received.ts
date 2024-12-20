import { WaIncomingMessages } from "graph-api/types/webhooks/application/fields/messages/values/messages";
import { WaSDKEventPayload } from "../../../types/events/event";
import { BaseMessageReceivedEventPayload } from "../../../types/events/payloads/message-received";

type Defined<T> = Exclude<T, undefined>;

type MessageReceivedEvent = Defined<
  WaSDKEventPayload["application"]["messageReceived"]
>[0];

export function parseMessageReceivedEventToSDK(
  message: WaIncomingMessages[0]
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

  const text: MessageReceivedEvent["text"] =
    message.text?.body ??
    message.button?.text ??
    message.interactive?.button_reply?.title ??
    message.interactive?.list_reply?.title ??
    message.document?.caption ??
    null;

  const media: MessageReceivedEvent["media"] = (message.audio ||
    message.document ||
    message.video ||
    message.image) && {
    id: (message.audio?.id ??
      message.document?.id ??
      message.image?.id ??
      message.video?.id)!,
    caption:
      message.document?.caption ??
      message.image?.caption ??
      message.video?.caption ??
      null,
    mime_type: (message.audio?.mime_type ??
      message.document?.mime_type ??
      message.image?.mime_type ??
      message.video?.mime_type)!,
    type: ["audio", "image", "video", "document"].filter(
      (v) => message[v as keyof typeof message]
    )[0]! as "audio" | "document" | "image" | "video",
    sha256:
      message.image?.sha256 ??
      message.document?.sha256 ??
      message.video?.sha256,
    filename: message.document?.filename ?? message.video?.filename,
  };

  const interaction: MessageReceivedEvent["interaction"] = {
    ...((message.interactive?.type === "button_reply" ||
      message.type === "button") && {
      button: {
        id: message.interactive?.button_reply?.id ?? null,
        title: message.button!.text ?? message.interactive?.button_reply!.title,
        payload: message.button?.payload ?? null,
      },
    }),
    ...(message.interactive &&
      message.interactive.type === "list_reply" && {
        selectedOption: {
          id: message.interactive.list_reply!.id,
          title: message.interactive.list_reply!.title,
          description: message.interactive.list_reply!.description,
        },
      }),
    ...(message.interactive?.type === "nfm_reply" && {
      flowResponse: JSON.parse(message.interactive.nfm_reply?.response_json!),
    }),
  };

  const payload: MessageReceivedEvent = {
    ...basePayload,
    ...(interaction && { interaction }),
    ...(media && { media }),
    text,
    chatId,
  };

  return payload;
}
