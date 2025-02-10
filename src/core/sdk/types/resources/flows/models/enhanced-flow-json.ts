import type { FlowMetadata } from "src/core/graph-api/resources/flows/models/flow-metadata";
import type { WaSDKGetFlowWebPreviewPageRequestQuery } from "../crud";
import type { AnyType } from "core/utils/types";

export type EnhancedFlowJSON = {
	id?: string;
	metadata: FlowMetadata;
	preview: WaSDKGetFlowWebPreviewPageRequestQuery;
	version: string;
	data_api_version: string;
	routing_model: Record<string, string[]>;
	screens: Record<string, AnyType>;
	meta: {
		lead_gen_ai: boolean;
	};
};
