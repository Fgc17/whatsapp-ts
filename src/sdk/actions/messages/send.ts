import { endpoints } from "graph-api/resources/endpoints";
import { parsers } from "../../parsers";
import { WaSDKSendMessageBody } from "../../types/resources/messages/send/request";
import { consume } from "graph-api/lib/consume";

export async function send(body: WaSDKSendMessageBody) {
  const sendMessageBody = parsers.toGraph.sendMessage(body);

  const endpoint = endpoints.messages.send;

  return await consume(endpoint, {
    body: sendMessageBody,
  });
}
