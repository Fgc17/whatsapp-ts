import { settings } from "../settings";

export const endpoints = () => {
  const version = settings.get("GRAPH_API_VERSION");
  const wabaId = settings.get("WHATSAPP_ACCOUNT_ID");
  const numberId = settings.get("WHATSAPP_NUMBER_ID");
  const accessToken = settings.get("META_APP_ACCESS_TOKEN");

  return {
    message: {
      send: {
        url: `https://graph.facebook.com/v${version}/${numberId}/messages`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      },
    },
    waba: {
      updateEncryption: {
        url: `https://graph.facebook.com/v${version}/${numberId}/whatsapp_business_encryption`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      },
    },
    flows: {
      create: {
        url: `https://graph.facebook.com/v${version}/${wabaId}/flows`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      },
      readMany: {
        url: `https://graph.facebook.com/v${version}/${wabaId}/flows`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
      delete: {
        url: (flowId: string) =>
          `https://graph.facebook.com/v${version}/${flowId}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
      read: {
        url: (flowId: string) =>
          `https://graph.facebook.com/v${version}/${flowId}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
      updateMetadata: {
        url: (flowId: string) =>
          `https://graph.facebook.com/v${version}/${flowId}`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      },
      updateJson: {
        url: (flowId: string) =>
          `https://graph.facebook.com/v${version}/${flowId}/assets`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
      createPreview: {
        url: (flowId: string) =>
          `https://graph.facebook.com/v${version}/${flowId}?fields=preview.invalidate(false)`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    },
  };
};
