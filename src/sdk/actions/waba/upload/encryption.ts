import { endpoints } from "graph-api/endpoints";
import { WhatsappUploadFlowEncryptionRequestBody } from "graph-api/types/resources/upload/flows-encryption/request";

async function uploadWabaEncryption(publicKey: string) {
  const endpoint = endpoints().waba.updateEncryption;

  const body: WhatsappUploadFlowEncryptionRequestBody = {
    business_public_key: publicKey,
  };

  return await fetch(endpoint.url, {
    body: JSON.stringify(body),
    method: endpoint.method,
    headers: endpoint.headers,
  });
}

export { uploadWabaEncryption as encryption };
