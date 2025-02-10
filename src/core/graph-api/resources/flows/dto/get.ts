import type { AnyType } from "core/utils/types";
import type { WhatsappFlowCategory } from "../models/flow-category";
import type {
	WhatsappFlowCanSendMessageStatus,
	WhatsappFlowStatus,
} from "../models/flow-status";
import type { WhatsappFlowValidationError } from "../models/flow-validation-error";
import type { WhatsappGetFlowWebPreviewURLResponse } from "./webpreview";

export type WhatsappGetFlowsRequestQuery = {
	fields: string;
};

export type WhatsappGetFlowsRequestResponse = {
	id: string;
	name: string;
	status: WhatsappFlowStatus;
	categories: WhatsappFlowCategory[];
	validation_errors: WhatsappFlowValidationError[];
	json_version: string;
	data_api_version: string;
	endpoint_uri: string;
	preview: WhatsappGetFlowWebPreviewURLResponse;
	whatsapp_business_account: AnyType;
	application: AnyType;
	health_status: {
		can_send_message: WhatsappFlowCanSendMessageStatus;
	};
};
