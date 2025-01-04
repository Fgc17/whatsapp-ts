import { WaIncomingErrors } from "graph-api/webhooks/application/fields/messages/values/errors";
import {
  WaIncomingIdentityObject,
  WaIncomingSystemObject,
} from "graph-api/webhooks/application/fields/messages/values/messages";
import {
  BaseMessageReceivedEventPayload,
  MessageReceivedEventPayload,
} from "./payloads/message-received";
import { MessageStatusUpdateEvent } from "./payloads/message-status";
import { WaSDKFlowExchangeEventPayload } from "./payloads/flow-exchange";
import { FlowUpdateEventPayload } from "./payloads/flow-update";

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
