import { endpoints } from "graph-api/index";
import { WhatsappWabaUploadEncryptionRequestBody } from "graph-api";

async function uploadWabaEncryption(publicKey: string) {
  const endpoint = endpoints.waba.updateEncryption;

  const body: WhatsappWabaUploadEncryptionRequestBody = {
    business_public_key: publicKey,
  };

  return await fetch(endpoint.url, {
    body: JSON.stringify(body),
    method: endpoint.method,
    headers: endpoint.headers,
  });
}

export { uploadWabaEncryption as encryption };
