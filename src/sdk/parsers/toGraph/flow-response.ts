import { WhatsappFlowResponse } from "graph-api/index";

const flowResponse = (flow_token: string, response: WhatsappFlowResponse) => {
  if (!response.data) {
    throw "Flow Broker Data is empty, make sure you are returning a response in your flow screen action handler.";
  }

  if (!response.screen) {
    throw "Flow Broker Screen is empty, make sure you are returning a screen in your flow screen action handler.";
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
