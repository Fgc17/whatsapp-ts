import type { AnyType } from "core/utils/types";
import type { FlowAction } from "../models/flow-action";

export type WhatsappGetFlowWebPreviewPageRequestQuery = {
	interactive: boolean;
	flow_token: string;
	flow_action: FlowAction;
	flow_action_payload: {
		screen: string;
		data: Record<string, AnyType>;
	};
	phone_number: string;
};

export type WhatsappGetFlowWebPreviewURLResponse = {
	id: string;
	preview: {
		preview_url: string;
		expires_at: string;
	};
};
