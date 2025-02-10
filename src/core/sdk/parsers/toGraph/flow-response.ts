import type { WhatsappFlowResponse } from "src/core/graph-api/index";

const flowResponse = (flow_token: string, response: WhatsappFlowResponse) => {
	if (!response.data) {
		throw "Missing data in flow response";
	}

	if (!response.screen) {
		throw "Missing screen in flow response";
	}

	response.screen = response.screen.toUpperCase();

	if (response.screen === "SUCCESS") {
		const data = response.data;

		response.data = {
			extension_message_response: {
				params: {
					flow_token,
					data,
				},
			},
		};
	}

	return response;
};

export { flowResponse };
