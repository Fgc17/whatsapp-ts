type WhatsappENV = {
  GRAPH_API_VERSION: string;

  META_APP_SECRET: string;
  META_APP_ID: string;
  META_APP_API_KEY: string;

  WHATSAPP_MESSAGE_NAMESPACE: string;
  WHATSAPP_WEBHOOK_KEY: string;
  WHATSAPP_ACCOUNT_ID: string;
  WHATSAPP_NUMBER_ID: string;

  WHATSAPP_FLOWS_ENCRYPTION_PUBLIC_KEY: string;
  WHATSAPP_FLOWS_ENCRYPTION_PRIVATE_KEY: string;
  WHATSAPP_FLOWS_ENCRYPTION_PASSPHRASE: string;
};

export const env = (key: keyof WhatsappENV): string => {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }

  return value;
};
