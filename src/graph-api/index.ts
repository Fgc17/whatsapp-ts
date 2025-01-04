export type { WhatsappCreateFlowRequestBody, WhatsappCreateFlowResponse } from "./resources/flows/dto/create";
export type { WhatsappDeleteFlowResponse } from "./resources/flows/dto/delete";
export type { WhatsappGetManyFlowsRequestResponse } from "./resources/flows/dto/get-many";
export type { WhatsappGetFlowsRequestQuery, WhatsappGetFlowsRequestResponse } from "./resources/flows/dto/get";
export type { WhatsappPublishFlowResponse } from "./resources/flows/dto/publish";
export type { WhatsappUpdateFlowJsonRequestBody, WhatsappUpdateFlowJsonResponse } from "./resources/flows/dto/update-json";
export type { WhatsappFlowUpdateMetadataRequestBody, WhatsappFlowUpdateMetadataResponse } from "./resources/flows/dto/update-metadata";
export type { WhatsappGetFlowWebPreviewPageRequestQuery, WhatsappGetFlowWebPreviewURLResponse } from "./resources/flows/dto/webpreview";
export type { FlowAction } from "./resources/flows/models/flow-action";
export type { WhatsappFlowCategory } from "./resources/flows/models/flow-category";
export type { WhatsappFlowMediaData } from "./resources/flows/models/flow-media-data";
export type { FlowMetadata } from "./resources/flows/models/flow-metadata";
export type { FlowScreen } from "./resources/flows/models/flow-screen";
export type { WhatsappFlowStatus, WhatsappFlowCanSendMessageStatus } from "./resources/flows/models/flow-status";
export type { WhatsappFlowValidationError } from "./resources/flows/models/flow-validation-error";
export type { WaOutgoingMessage, WaMessageType } from "./resources/messages/dto/send/message";
export type { WaOutgoingContactsMessage } from "./resources/messages/dto/send/payloads/contacts";
export type { WaInteractiveAction, WaInteractiveBody, WaInteractiveFooter, WaInteractiveHeader, WaInteractiveActionType, WaInteractiveBase, WaOutgoingInteractiveMessage } from "./resources/messages/dto/send/payloads/interactive";
export type { WaOutgoingLocationMessage } from "./resources/messages/dto/send/payloads/location";
export type { WaOutgoingMediaMessage } from "./resources/messages/dto/send/payloads/media";
export type { WaOutgoingReactionMessage } from "./resources/messages/dto/send/payloads/reaction";
export type { WaOutgoingTemplateMessage } from "./resources/messages/dto/send/payloads/template";
export type { WaOutgoingTextMessage } from "./resources/messages/dto/send/payloads/text";
export type { WhatsappSendMessageRequestConfig, WhatsappSendMessageRequestBody, WhatsappSendMessageResponse } from "./resources/messages/dto/send/send";
export type { WhatsappRegisterPhoneNumberRequestBody } from "./resources/waba/dto/register-number";
export type { WhatsappWabaUploadEncryptionRequestBody } from "./resources/waba/dto/upload-encryption";
export type { ISOCountryCode } from "./resources/waba/models/iso-country-code";
export type { MetadataObject, MessageField } from "./webhooks/application/fields/messages/message";
export type { WaIncomingContactObject, WaIncomingContacts } from "./webhooks/application/fields/messages/values/contacts";
export type { WaIncomingErrorObject, WaIncomingErrors } from "./webhooks/application/fields/messages/values/errors";
export type { ConversationType, WaIncomingMessageStatus, WaIncomingMessageStatuses } from "./webhooks/application/fields/messages/values/message-statuses";
export type { WaIncomingInteractiveObject, WaIncomingOrderObject, WaIncomingReferralObject, WaIncomingStickerObject, WaIncomingSystemObject, WaIncomingContextObject, WaIncomingButtonObject, WaIncomingDocumentObject, WaIncomingImageObject, WaIncomingVideoObject, WaIncomingAudioObject, WaIncomingIdentityObject, WaIncomingTextObject, WaIncomingMessageType, WaIncomingMessages } from "./webhooks/application/fields/messages/values/messages";
export type { WhatsappApplicationWebhookBody } from "./webhooks/application/webhook";
export type { WhatsappFlowDecryptedWebhookBody, WhatsappFlowResponse, WhatsappFlowPingResponse, WhatsappFlowEncryptionData, WhatsappFlowEncryptedWebhookBody, WhatsappFlowErrorMessages, WhatsappFlowInfo } from "./webhooks/flows/webhook";

import { endpoints as flows } from "graph-api/resources/flows/endpoints";
import { endpoints as messages } from "graph-api/resources/messages/endpoints";
import { endpoints as waba } from "graph-api/resources/waba/endpoints";

export const endpoints = {
  flows,
  messages,
  waba,
};
