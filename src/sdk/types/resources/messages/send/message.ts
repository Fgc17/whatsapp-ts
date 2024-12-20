import { WaSDKOutgoingFlowMessage } from "./payloads/flow";
import { WaSDKOutgoingListMessage } from "./payloads/list";
import { WaSDKOutgoingTemplateMessage } from "./payloads/template";
import { WaSDKOutgoingTextMessage } from "./payloads/text";

export type WaSDKSendMessageData =
  | WaSDKOutgoingFlowMessage
  | WaSDKOutgoingListMessage
  | WaSDKOutgoingTextMessage
  | WaSDKOutgoingTemplateMessage;
