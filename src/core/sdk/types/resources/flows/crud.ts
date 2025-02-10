import type { AnyType } from "core/utils/types";
import type { FlowAction } from "src/core/graph-api";

export type WaSDKGetFlowWebPreviewPageRequestQuery = {
	interactive: boolean;
	recipient_id: string;
	flow_identifier: string;
	flow_action: FlowAction;
	phone_number: string;
	flow_action_payload: {
		screen: string;
		data: Record<string, AnyType>;
	};
};
