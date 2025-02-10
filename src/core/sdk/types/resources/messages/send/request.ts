import type { WaSDKSendMessageData } from "./message";

export interface WaSDKSendMessageConfig {
	showUrlPreviewImage?: boolean;
	metadata?: string;
	to: string;
	reply?: string;
}

export type WaSDKSendMessageBody = WaSDKSendMessageConfig & {
	message: WaSDKSendMessageData;
};

/* export enum WaSDKSendMessageType {
  TEXT = "text",
  AUDIO = "audio",
  DOCUMENT = "document",
  IMAGE = "image",
  STICKER = "sticker",
  VIDEO = "video",
  CONTACTS = "contacts",
  LOCATION = "location",
  REACTION = "reaction",
  TEMPLATE = "template",
  FLOW = "flow",
  BUTTON = "button",
  LIST = "list",
  CATALOG_MESSAGE = "catalog_message",
  PRODUCT = "product",
  PRODUCT_LIST = "product_list",
}
 */
