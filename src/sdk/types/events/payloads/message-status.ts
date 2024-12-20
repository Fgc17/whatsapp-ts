import { WaIncomingErrors } from "graph-api/types/webhooks/application/fields/messages/values/errors";
import { WaIncomingMessageStatuses } from "graph-api/types/webhooks/application/fields/messages/values/message-statuses";

export interface MessageStatusUpdateEvent {
  messageId: string;
  metadata: string;
  timestamp: number;
  errors: WaIncomingErrors;
  status: WaIncomingMessageStatuses;
}
