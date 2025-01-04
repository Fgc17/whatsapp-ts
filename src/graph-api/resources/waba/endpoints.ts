import { data, endpoint } from "graph-api/lib/utils";
import { WhatsappWabaUploadEncryptionRequestBody } from "./dto/upload-encryption";

export const endpoints = {
  updateEncryption: endpoint({
    url: `/{number_id}/whatsapp_business_encryption`,
    method: "post",
    request: {
      body: data<WhatsappWabaUploadEncryptionRequestBody>(),
    },
  }),
  registerNumber: endpoint({
    url: `/{number_id}/register`,
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    request: {
      body: data<WhatsappWabaUploadEncryptionRequestBody>(),
    },
  }),
};
