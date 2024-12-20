import { WaIncomingErrors } from "./errors";

export interface WaIncomingInteractiveObject {
  type: "button_reply" | "list_reply" | "nfm_reply";
  button_reply?: {
    id: string;
    title: string;
  };
  list_reply?: {
    id: string;
    title: string;
    description: string;
  };
  nfm_reply?: {
    response_json: string;
    body: string;
    name: "flow";
  };
}

export interface WaIncomingOrderObject {
  catalog_id: string;
  text: string;
  product_items: Array<{
    product_retailer_id: string;
    quantity: number;
    item_price: string;
    currency: string;
  }>;
}

export interface WaIncomingReferralObject {
  source_url: string;
  source_type: string;
  source_id: string;
  headline: string;
  body: string;
  media_type: string;
  image_url: string;
  video_url: string;
  thumbnail_url: string;
  ctwa_clid: string;
}

export interface WaIncomingStickerObject {
  mime_type: string;
  sha256: string;
  id: string;
  animated: string;
}

export interface WaIncomingSystemObject {
  body: string;
  identity: string;
  new_wa_id: string;
  wa_id: string;
  type: {
    customer_changed_number: string;
    customer_identity_changed: string;
  };
  customer_changed_number: string;
  customer_identity_changed: string;
  customer: string;
}

export interface WaIncomingContextObject {
  forwarded: boolean;
  frequently_forwarded: boolean;
  from: string;
  id: string;
  referred_product?: {
    catalog_id: string;
    product_retailer_id: string;
  };
}

export interface WaIncomingButtonObject {
  payload: string;
  text: string;
}

export interface WaIncomingDocumentObject {
  caption: string | null;
  filename: string;
  sha256: string;
  mime_type: string;
  id: string;
}

export interface WaIncomingImageObject {
  caption: string | null;
  sha256: string;
  id: string;
  mime_type: string;
}

export interface WaIncomingVideoObject {
  id: string;
  caption: string | null;
  filename: string;
  sha256: string;
  mime_type: string;
}

export interface WaIncomingAudioObject {
  id: string;
  mime_type: string;
}

export interface WaIncomingIdentityObject {
  acknowledged: boolean;
  created_timestamp: number;
  hash: string;
}

export interface WaIncomingTextObject {
  body: string;
}

export type WaIncomingMessageType =
  | "audio"
  | "button"
  | "document"
  | "text"
  | "image"
  | "interactive"
  | "order"
  | "sticker"
  | "system"
  | "unknown"
  | "video";

export type WaIncomingMessages = Array<{
  id: string;
  from: string;
  timestamp: number;
  type: WaIncomingMessageType;
  context?: WaIncomingContextObject;
  image?: WaIncomingImageObject;
  video?: WaIncomingVideoObject;
  interactive?: WaIncomingInteractiveObject;
  order?: WaIncomingOrderObject;
  referral?: WaIncomingReferralObject;
  sticker?: WaIncomingStickerObject;
  /**
   * Sent when a customer changes their phone number or profile information.
   */
  system?: WaIncomingSystemObject;
  text?: WaIncomingTextObject;
  identity?: WaIncomingIdentityObject;
  audio?: WaIncomingAudioObject;
  button?: WaIncomingButtonObject;
  document?: WaIncomingDocumentObject;
  errors?: WaIncomingErrors;
}>;
