import crypto from "crypto";

export async function generateFlowEncryption() {
  const passphrase = crypto.randomUUID();

  const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
    modulusLength: 2048,
    publicKeyEncoding: {
      type: "spki",
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs8",
      format: "pem",
      cipher: "aes-256-cbc",
      passphrase: passphrase,
    },
  });

  const encryptionData = {
    passphrase,
    publicKey,
    privateKey,
  };

  return encryptionData;
}
