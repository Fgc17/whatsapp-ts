import crypto from "node:crypto";
import type {
	WhatsappFlowDecryptedWebhookBody,
	WhatsappFlowEncryptedWebhookBody,
} from "src/core/graph-api/webhooks/flows/webhook";
import type { WaSDKFlowDecryptedWebhookBody } from "src/core/sdk/types";
import { settings } from "src/core/settings";

export function decryptFlowBody(
	body: WhatsappFlowEncryptedWebhookBody,
): WaSDKFlowDecryptedWebhookBody {
	const { encrypted_aes_key, encrypted_flow_data, initial_vector } = body;

	const privateKey = crypto.createPrivateKey({
		key: settings.get("WHATSAPP_FLOWS_ENCRYPTION_PRIVATE_KEY"),
		passphrase: settings.get("WHATSAPP_FLOWS_ENCRYPTION_PASSPHRASE"),
	});

	const decryptedAesKey = crypto.privateDecrypt(
		{
			key: privateKey,
			padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
			oaepHash: "sha256",
		},
		Buffer.from(encrypted_aes_key, "base64"),
	);

	const flowDataBuffer = Buffer.from(encrypted_flow_data, "base64");

	const initialVectorBuffer = Buffer.from(initial_vector, "base64");

	const TAG_LENGTH = 16;

	const encrypted_flow_data_body = flowDataBuffer.subarray(0, -TAG_LENGTH);

	const encrypted_flow_data_tag = flowDataBuffer.subarray(-TAG_LENGTH);

	const decipher = crypto.createDecipheriv(
		"aes-128-gcm",
		decryptedAesKey,
		initialVectorBuffer,
	);

	decipher.setAuthTag(encrypted_flow_data_tag);

	const decryptedJSONString = Buffer.concat([
		decipher.update(encrypted_flow_data_body),
		decipher.final(),
	]).toString("utf-8");

	return {
		payload: JSON.parse(
			decryptedJSONString,
		) as WhatsappFlowDecryptedWebhookBody,
		encryptionMetadata: {
			aesKeyBuffer: decryptedAesKey,
			initialVectorBuffer,
		},
	};
}
