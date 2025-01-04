import { WaSDKButtonMessage } from "./payloads/button";
import { WaSDKOutgoingFlowMessage } from "./payloads/flow";
import { WaSDKOutgoingListMessage } from "./payloads/list";
import { WaSDKOutgoingTemplateMessage } from "./payloads/template";
import { WaSDKOutgoingTextMessage } from "./payloads/text";

export type WaSDKSendMessageData =
  | WaSDKButtonMessage
  | WaSDKOutgoingFlowMessage
  | WaSDKOutgoingListMessage
  | WaSDKOutgoingTextMessage
  | WaSDKOutgoingTemplateMessage;
