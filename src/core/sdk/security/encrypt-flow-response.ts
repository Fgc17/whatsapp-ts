import type { AnyType } from "core/utils/types";
import crypto from "node:crypto";

export function encryptFlowResponse(
	data: AnyType,
	encryptionMetadata: {
		aesKeyBuffer: Buffer;
		initialVectorBuffer: Buffer;
	},
) {
	const flipped_iv = [];
	for (const pair of Buffer.from(
		encryptionMetadata.initialVectorBuffer,
	).entries()) {
		flipped_iv.push(~pair[1]);
	}

	const cipher = crypto.createCipheriv(
		"aes-128-gcm",
		Buffer.from(encryptionMetadata.aesKeyBuffer),
		Buffer.from(flipped_iv),
	);

	return Buffer.concat([
		cipher.update(JSON.stringify(data), "utf-8"),
		cipher.final(),
		cipher.getAuthTag(),
	]).toString("base64");
}
