import { data, endpoint } from "src/core/graph-api/lib/utils";
import type { WhatsappWabaUploadEncryptionRequestBody } from "./dto/upload-encryption";
import type { WhatsappRegisterPhoneNumberRequestBody } from "core";

export const endpoints = {
	updateEncryption: endpoint({
		url: "/{number_id}/whatsapp_business_encryption",
		method: "post",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
		request: {
			body: data<WhatsappWabaUploadEncryptionRequestBody>(),
		},
	}),
	registerNumber: endpoint({
		url: "/{number_id}/register",
		method: "post",
		headers: {
			"Content-Type": "application/json",
		},
		request: {
			body: data<WhatsappRegisterPhoneNumberRequestBody>(),
		},
	}),
};
