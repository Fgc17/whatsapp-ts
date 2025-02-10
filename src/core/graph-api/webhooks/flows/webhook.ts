import type { AnyType } from "core/utils/types";
import type { FlowAction } from "src/core/graph-api/resources/flows/models/flow-action";
import type { FlowScreen } from "src/core/graph-api/resources/flows/models/flow-screen";

export interface WhatsappFlowDecryptedWebhookBody {
	version: "3.0";
	screen: FlowScreen;
	action: FlowAction;
	data: Record<string, AnyType>;
	flow_token: string;
}

export interface WhatsappFlowResponse {
	screen: FlowScreen;
	data: Record<string, AnyType>;
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

export interface WhatsappFlowEncryptedWebhookBody {
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
