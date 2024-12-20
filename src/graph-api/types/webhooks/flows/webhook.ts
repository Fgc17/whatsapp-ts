export type FlowAction = "INIT" | "BACK" | "data_exchange" | "ping";

export type FlowScreen = "SUCCESS" | string;

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

export interface WhatsappFlowPayload {
  version: "3.0";
  screen: FlowScreen;
  action: FlowAction;
  data: any;
  flow_token: string;
}

export interface WhatsappFlowResponse {
  screen: FlowScreen;
  data: any;
}

export interface WhatsappFlowPingResponse {
  data: {
    status: "active";
  };
}

export interface WhatsappFlowEncryptionData {
  aesKeyBuffer: Buffer;
  initialVectorBuffer: Buffer;
}

export type WhatsappFlowDecryptedBody = {
  encryptionMetadata: WhatsappFlowEncryptionData;
  payload: WhatsappFlowPayload;
};

export interface WhatsappFlowWebhookBody {
  encrypted_aes_key: string;
  encrypted_flow_data: string;
  initial_vector: string;
}

export type WhatsappFlowErrorMessages<T> = Partial<Record<keyof T, string>>;

export interface WhatsappFlowInfo {
  id: string;
  mode: "draft" | "published";
  name: string;
}
