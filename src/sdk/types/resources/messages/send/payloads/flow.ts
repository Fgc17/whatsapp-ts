import { WaInteractiveBase } from "graph-api/types/resources/messages/send/payloads/interactive";

interface FlowPayload {
  screen: string;
  data?: any;
}

interface BaseFlowConfig {
  name: string;
  buttonText: string;
  token: string;
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
