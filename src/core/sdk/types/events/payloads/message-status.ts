import type { WaIncomingErrors } from "src/core/graph-api/webhooks/application/fields/messages/values/errors";
import type { WaIncomingMessageStatuses } from "src/core/graph-api/webhooks/application/fields/messages/values/message-statuses";

export interface MessageStatusUpdateEvent {
	messageId: string;
	metadata: string;
	timestamp: number;
	errors: WaIncomingErrors;
	status: WaIncomingMessageStatuses;
}
