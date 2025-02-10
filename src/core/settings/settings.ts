import "dotenv/config";

export type WhatsappSDKSettings = {
	GRAPH_API_VERSION: string;

	META_APP_ACCESS_TOKEN: string;
	META_APP_ID: string;
	META_APP_SECRET: string;

	WHATSAPP_MESSAGE_NAMESPACE: string;
	WHATSAPP_WEBHOOK_KEY: string;
	WHATSAPP_ACCOUNT_ID: string;
	WHATSAPP_NUMBER_ID: string;

	WHATSAPP_FLOWS_ENCRYPTION_PUBLIC_KEY: string;
	WHATSAPP_FLOWS_ENCRYPTION_PRIVATE_KEY: string;
	WHATSAPP_FLOWS_ENCRYPTION_PASSPHRASE: string;

	WHATSAPP_UNNOFICIAL_AUTHENTICATION_STRING: string;
};

const storage = {} as WhatsappSDKSettings;

const setup = (stg?: Partial<WhatsappSDKSettings>) => {
	Object.assign(storage, stg);
};

const get = (key: keyof WhatsappSDKSettings): string => {
	const value = storage[key] ?? process.env[key];

	if (!value) {
		throw new Error(`Missing environment variable: ${key}`);
	}

	return value;
};

export const settings = {
	setup,
	get,
};
