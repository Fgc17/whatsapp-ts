import type { AnyType } from "core/utils/types";
import type { WhatsappFlowValidationError } from "../models/flow-validation-error";

export type WhatsappUpdateFlowJsonRequestBody = {
	name: "flow.json";
	asset_type: "FLOW_JSON";
	file: AnyType;
};

export type WhatsappUpdateFlowJsonResponse = {
	success: boolean;
	validation_errors: WhatsappFlowValidationError[];
};
