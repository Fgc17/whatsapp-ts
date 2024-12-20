import { endpoints } from "graph-api/endpoints";
import { parsers } from "../../parsers";
import { WaSDKSendMessageBody } from "../../types/resources/messages/send/request";

export async function send(body: WaSDKSendMessageBody) {
  const sendMessageBody = parsers.toGraph.sendMessage(body);

  if (sendMessageBody.type === "template") {
    sendMessageBody.template!.namespace =
      process.env.WHATSAPP_MESSAGE_NAMESPACE;
  }

  const endpoint = endpoints.sendMessage;

  console.log("sendMessageBody", sendMessageBody);

  return await fetch(endpoint.url, {
    method: endpoint.method,
    headers: endpoint.headers,
    body: JSON.stringify(sendMessageBody),
  })
    .then((res) => res.json())
    .then((json) => json.data)
    .catch((err) => {
      throw err.response.data;
    });
}
