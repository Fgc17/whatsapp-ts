import { WaOutgoingContactsMessage } from "./payloads/contacts";
import { WaOutgoingInteractiveMessage } from "./payloads/interactive";
import { WaOutgoingLocationMessage } from "./payloads/location";
import { WaOutgoingMediaMessage } from "./payloads/media";
import { WaOutgoingReactionMessage } from "./payloads/reaction";
import { WaOutgoingTemplateMessage } from "./payloads/template";
import { WaOutgoingTextMessage } from "./payloads/text";

export interface WaOutgoingMessage {
  text?: WaOutgoingTextMessage;
  contacts?: WaOutgoingContactsMessage;
  reaction?: WaOutgoingReactionMessage;
  location?: WaOutgoingLocationMessage;
  audio?: WaOutgoingMediaMessage;
  document?: WaOutgoingMediaMessage;
  image?: WaOutgoingMediaMessage;
  sticker?: WaOutgoingMediaMessage;
  video?: WaOutgoingMediaMessage;
  interactive?: WaOutgoingInteractiveMessage;
  template?: WaOutgoingTemplateMessage;
}

export type WaMessageType = keyof WaOutgoingMessage;
