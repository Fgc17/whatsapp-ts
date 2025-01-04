import { WaOutgoingMediaMessage } from "./media";

export interface WaInteractiveAction {
  name?: "flow";
  parameters?: {
    flow_message_version?: "3";
    flow_token?: string;
    flow_name?: string;
    flow_cta?: string;
    flow_action?: "navigate" | "data_exchange";
    flow_action_payload?: {
      screen: string;
      data?: any;
    };
    mode: "draft" | "published";
  };
  button?: string;
  buttons?: Array<{
    type: "reply";
    title: string;
    id: string;
  }>;
  catalog_id?: string;
  product_retailer_id?: string;
  sections?: Array<{
    product_items?: Array<{
      product_retailer_id: string;
    }>;
    rows: Array<{
      id: string;
      title: string;
      description?: string;
    }>;
    title: string;
  }>;
  mode?: "draft" | "published";
}

export interface WaInteractiveBody {
  text: string;
}

export interface WaInteractiveFooter {
  text: string;
}

export interface WaInteractiveHeader {
  document?: WaOutgoingMediaMessage;
  image?: WaOutgoingMediaMessage;
  video?: WaOutgoingMediaMessage;
  text: string;
  type: "text" | "video" | "image" | "document";
}

export type WaInteractiveActionType =
  | "button"
  | "catalog_message"
  | "list"
  | "product"
  | "product_list"
  | "flow";

export class WaInteractiveBase {
  constructor({
    type,
    body,
    footer,
    header,
  }: {
    type: WaInteractiveActionType;
    body?: WaInteractiveBody;
    footer?: WaInteractiveFooter;
    header?: WaInteractiveHeader;
  }) {
    this.type = type;
    this.body = body;
    this.footer = footer;
    this.header = header;
  }
  type: WaInteractiveActionType;
  body?: WaInteractiveBody;
  footer?: WaInteractiveFooter;
  header?: WaInteractiveHeader;
}

export type WaOutgoingInteractiveMessage = WaInteractiveBase & {
  action: WaInteractiveAction;
};
