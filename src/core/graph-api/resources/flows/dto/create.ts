export type WhatsappCreateFlowRequestBody = {
	name: string;
	categories: string[];
	clone_flow_id?: string;
	endpoint_uri?: string;
};

export type WhatsappCreateFlowResponse = {
	id: string;
};
