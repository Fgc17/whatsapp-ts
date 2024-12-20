import crypto from "node:crypto";
import { env } from "../../env";

export type WebhookSignatureChallengeArguments = {
  rawBody: string;
  untrustedSignature: string;
};

export async function verifySignature(request: Request, rawBody: string) {
  const headerSignature = request.headers.get("x-hub-signature-256");

  if (!headerSignature) {
    return false;
  }

  const untrustedSignature = headerSignature.replace("sha256=", "");

  const trustedSignature = crypto
    .createHmac("sha256", env("WHATSAPP_WEBHOOK_KEY"))
    .update(rawBody, "utf-8")
    .digest("hex");

  const isSignatureValid = crypto.timingSafeEqual(
    Buffer.from(untrustedSignature),
    Buffer.from(trustedSignature)
  );

  if (!isSignatureValid) {
    return false;
  }

  return true;
}
