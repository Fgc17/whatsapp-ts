import { WhatsappFlowCategory } from "../models/flow-category";
import { WhatsappFlowStatus } from "../models/flow-status";
import { WhatsappFlowValidationError } from "../models/flow-validation-error";

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
