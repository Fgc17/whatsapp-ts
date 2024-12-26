import { FlowAction } from "graph-api/types/webhooks/flows/webhook";

export type WhatsappCreateFlowRequestBody = {
  name: string;
  categories: string[];
  clone_flow_id?: string;
  endpoint_uri?: string;
};

export type WhatsappUpdateFlowMetadataRequestBody = {
  name?: string;
  categories?: string[];
  endpoint_uri?: string;
  application_id?: string;
};

export type WhatsappUpdateFlowJsonRequestBody = {
  name: "flow.json";
  asset_type: "FLOW_JSON";
  file: any;
};

export type WhatsappCreateWebPreviewRequestQuery = {
  interactive: boolean;
  flow_token: string;
  flow_action: FlowAction;
  flow_action_payload: any;
  phone_number: string;
};

export type WhatsappDeleteFlowRequestParams = {
  flow_id: string;
};

export type WhatsappGetFlowRequestParams = {
  flow_id: string;
};

export type WhatsappGetFlowsRequestQuery = {
  id: string;
  name: string;
  status: string;
  categories: string[];
  validation_errors: any;
  json_version: string;
  data_api_version: string;
  endpoint_uri: string;
  preview: {
    preview_url: string;
    expires_at: string;
  };
  application: string;
  health_status: string;
};
