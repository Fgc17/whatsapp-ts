import { WhatsappFlowMediaData } from "graph-api/resources/flows/models/flow-media-data";
import crypto from "node:crypto";

async function fetchMedia(url: string) {
  return await fetch(url).then(async (response) => {
    const arrayBuffer = await response.arrayBuffer();
    return Buffer.from(arrayBuffer);
  });
}

export async function decryptFlowMedia(media: WhatsappFlowMediaData[]) {
  const decryptedFlowMedia: Buffer[] = [];

  for (const photo of media) {
    let { cdn_url, encryption_metadata } = photo;

    if (cdn_url === "EXAMPLE_DATA__CDN_URL_WILL_COME_IN_THIS_FIELD") {
      cdn_url = "https://picsum.photos/seed/picsum/200";

      const fileBuffer = await fetchMedia(cdn_url);

      decryptedFlowMedia.push(fileBuffer);

      continue;
    }

    const fileBuffer = await fetchMedia(cdn_url);

    const { iv, encryption_key, hmac_key, encrypted_hash, plaintext_hash } =
      encryption_metadata;

    const base64Metadata = {
      iv: Buffer.from(iv, "base64"),
      encryption_key: Buffer.from(encryption_key, "base64"),
      hmac_key: Buffer.from(hmac_key, "base64"),
    };

    const computedEncHash = crypto
      .createHash("sha256")
      .update(fileBuffer)
      .digest("base64");

    if (computedEncHash !== encrypted_hash) {
      throw new Error("Encrypted hash validation failed");
    }

    const ciphertext = fileBuffer.subarray(0, fileBuffer.length - 10);

    const hmac10 = fileBuffer.subarray(-10);

    const computedHmac = crypto
      .createHmac("sha256", base64Metadata.hmac_key)
      .update(Buffer.concat([base64Metadata.iv, ciphertext]))
      .digest();

    if (!computedHmac.subarray(0, 10).equals(hmac10)) {
      throw new Error("HMAC validation failed");
    }

    const decipher = crypto.createDecipheriv(
      "aes-256-cbc",
      base64Metadata.encryption_key,
      base64Metadata.iv
    );

    let decrypted = decipher.update(ciphertext);

    const decryptedMedia = Buffer.concat([decrypted, decipher.final()]);

    const computedPlaintextHash = crypto
      .createHash("sha256")
      .update(decryptedMedia)
      .digest("base64");

    if (computedPlaintextHash !== plaintext_hash) {
      throw new Error("Decrypted media hash validation failed");
    }

    decryptedFlowMedia.push(decryptedMedia);
  }

  return decryptedFlowMedia;
}
