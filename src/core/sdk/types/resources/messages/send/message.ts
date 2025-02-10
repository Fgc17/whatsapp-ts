import type { WaSDKButtonMessage } from "./payloads/button";
import type { WaSDKOutgoingFlowMessage } from "./payloads/flow";
import type { WaSDKOutgoingListMessage } from "./payloads/list";
import type { WaSDKOutgoingMediaMessage } from "./payloads/media";
import type { WaSDKOutgoingTemplateMessage } from "./payloads/template";
import type { WaSDKOutgoingTextMessage } from "./payloads/text";

export type WaSDKSendMessageData =
	| WaSDKButtonMessage
	| WaSDKOutgoingFlowMessage
	| WaSDKOutgoingListMessage
	| WaSDKOutgoingTextMessage
	| WaSDKOutgoingTemplateMessage
	| WaSDKOutgoingMediaMessage;
