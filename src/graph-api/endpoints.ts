import { env } from "env";

export const endpoints = {
  sendMessage: {
    url: `https://graph.facebook.com/v${env("GRAPH_API_VERSION")}/${env("WHATSAPP_NUMBER_ID")}/messages`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env("META_APP_API_KEY")}`,
    },
  },
  uploadFlowEncryption: {
    url: `https://graph.facebook.com/v${env("GRAPH_API_VERSION")}/${env("WHATSAPP_NUMBER_ID")}/whatsapp_business_encryption`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env("META_APP_API_KEY")}`,
    },
  },
};
