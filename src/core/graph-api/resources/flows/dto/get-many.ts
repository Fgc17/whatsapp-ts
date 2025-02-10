import type { WhatsappFlowCategory } from "../models/flow-category";
import type { WhatsappFlowStatus } from "../models/flow-status";
import type { WhatsappFlowValidationError } from "../models/flow-validation-error";

export type WhatsappGetManyFlowsRequestResponse = {
	data: Array<{
		id: string;
		name: string;
		status: WhatsappFlowStatus;
		categories: WhatsappFlowCategory[];
		validation_errors: WhatsappFlowValidationError[];
	}>;
	paging: {
		cursors: {
			before: string;
			after: string;
		};
	};
};
