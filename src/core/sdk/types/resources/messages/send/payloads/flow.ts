import type { AnyType } from "core/utils/types";
import type { WaInteractiveBase } from "src/core/graph-api";

interface FlowPayload {
	screen: string;
	data?: Record<string, AnyType>;
}

interface BaseFlowConfig {
	name: string;
	buttonText: string;
	identifier?: string;
	mode?: "draft" | "published";
}

export interface NavigateFlowConfig extends BaseFlowConfig {
	action?: "navigate";
	payload: FlowPayload;
}

export interface DataExchangeFlowConfig extends BaseFlowConfig {
	action?: "data_exchange";
	payload?: FlowPayload;
}

export type FlowConfig = NavigateFlowConfig | DataExchangeFlowConfig;

export type WaSDKOutgoingFlowMessage = Omit<WaInteractiveBase, "type"> & {
	type: "flow";
	flow: FlowConfig;
};
