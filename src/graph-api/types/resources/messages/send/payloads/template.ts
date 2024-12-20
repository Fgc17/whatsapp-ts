import { WaOutgoingMediaMessage } from "./media";

export type WaOutgoingTemplateMessage = {
  name: string;
  language: {
    code: string;
  };
  namespace?: string;
  components?: Array<
    | {
        type: "header" | "body" | "footer";
        parameters: Array<{
          type: "text" | "image" | "video" | "document";
          text?: string;
          image?: WaOutgoingMediaMessage;
          video?: WaOutgoingMediaMessage;
          document?: WaOutgoingMediaMessage;
        }>;
      }
    | {
        type: "button";
        sub_type: "quick_reply" | "url" | "copy_code";
        index: string;
        parameters: Array<{
          type: "payload" | "text" | "coupon_code";
          payload?: string;
          text?: string;
          coupon_code?: string;
        }>;
      }
  >;
};
