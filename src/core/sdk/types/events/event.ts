import type { WaIncomingErrors } from "src/core/graph-api/webhooks/application/fields/messages/values/errors";
import type {
	WaIncomingIdentityObject,
	WaIncomingSystemObject,
} from "src/core/graph-api/webhooks/application/fields/messages/values/messages";
import type {
	BaseMessageReceivedEventPayload,
	MessageReceivedEventPayload,
} from "./payloads/message-received";
import type { MessageStatusUpdateEvent } from "./payloads/message-status";
import type { WaSDKFlowExchangeEventPayload } from "./payloads/flow-exchange";
import type { FlowUpdateEventPayload } from "./payloads/flow-update";

export interface WaSDKEventPayload {
	healthCheck: string;
	flowExchange: WaSDKFlowExchangeEventPayload;
	application: {
		errors?: WaIncomingErrors[];
		profileUpdate?: BaseMessageReceivedEventPayload &
			{
				identity: WaIncomingIdentityObject;
				system: WaIncomingSystemObject;
			}[];
		messageStatusUpdate?: MessageStatusUpdateEvent[];
		messageReceived?: MessageReceivedEventPayload[];
		flowUpdate?: FlowUpdateEventPayload[];
	};
}

export type WaSDKEventType = keyof WaSDKEventPayload;

export interface WaSDKEvent<T extends WaSDKEventType = WaSDKEventType> {
	type: T;
	payload: WaSDKEventPayload[T];
}
