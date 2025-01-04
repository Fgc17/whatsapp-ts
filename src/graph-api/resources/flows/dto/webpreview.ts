import { FlowAction } from "../models/flow-action";

export type WhatsappGetFlowWebPreviewPageRequestQuery = {
  interactive: boolean;
  flow_token: string;
  flow_action: FlowAction;
  flow_action_payload: any;
  phone_number: string;
};

export type WhatsappGetFlowWebPreviewURLResponse = {
  id: string;
  preview: {
    preview_url: string;
    expires_at: string;
  };
};
