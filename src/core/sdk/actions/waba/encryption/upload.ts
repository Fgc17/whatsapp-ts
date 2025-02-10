import { endpoints } from "src/core/graph-api/index";
import type { WhatsappWabaUploadEncryptionRequestBody } from "src/core/graph-api";
import { consume } from "src/core/graph-api/lib/consume";

async function uploadWabaEncryption(publicKey: string) {
	const endpoint = endpoints.waba.updateEncryption;

	const body: WhatsappWabaUploadEncryptionRequestBody = {
		business_public_key: publicKey,
	};

	return await consume(
		endpoint,
		{
			body,
		},
		{
			asUrlEncoded: true,
		},
	);
}

export { uploadWabaEncryption };
