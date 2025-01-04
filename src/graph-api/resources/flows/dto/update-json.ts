import { WhatsappFlowValidationError } from "../models/flow-validation-error";

export type WhatsappUpdateFlowJsonRequestBody = {
  name: "flow.json";
  asset_type: "FLOW_JSON";
  file: any;
};

export type WhatsappUpdateFlowJsonResponse = {
  success: boolean;
  validation_errors: WhatsappFlowValidationError[];
};
