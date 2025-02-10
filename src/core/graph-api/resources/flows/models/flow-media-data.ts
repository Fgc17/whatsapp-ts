export type WhatsappFlowMediaData = {
	media_id: string;
	cdn_url: string;
	file_name: string;
	encryption_metadata: {
		encrypted_hash: string;
		iv: string;
		encryption_key: string;
		hmac_key: string;
		plaintext_hash: string;
	};
};
