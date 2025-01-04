import { WaOutgoingTemplateMessage } from "graph-api";

export type WaSDKOutgoingTemplateMessage = Omit<
  WaOutgoingTemplateMessage,
  "namespace" | "language"
> & {
  type: "template";
  language: string;
};
