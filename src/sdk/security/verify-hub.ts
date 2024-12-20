import { env } from "env";

export function verifyHub(request: Request) {
  const params = new URL(request.url).searchParams;

  const untrustedToken = params.get("hub.verify_token");

  const challenge = params.get("hub.challenge");

  if (!untrustedToken || !challenge) {
    return false;
  }

  const trustedToken = env("WHATSAPP_WEBHOOK_KEY");

  if (untrustedToken != trustedToken) {
    return false;
  }

  return challenge;
}
