import { WaOutgoingTemplateMessage } from "graph-api/types/resources/messages/send/payloads/template";

export type WaSDKOutgoingTemplateMessage = Omit<
  WaOutgoingTemplateMessage,
  "namespace" | "language"
> & {
  type: "template";
  language: string;
};
