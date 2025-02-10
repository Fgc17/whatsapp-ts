import type { WaOutgoingTemplateMessage } from "src/core/graph-api";

export type WaSDKOutgoingTemplateMessage = Omit<
	WaOutgoingTemplateMessage,
	"namespace" | "language"
> & {
	type: "template";
	language: string;
};
