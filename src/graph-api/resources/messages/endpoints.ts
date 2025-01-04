import { endpoint, data } from "graph-api/lib/utils";
import {
  WhatsappSendMessageRequestBody,
  WhatsappSendMessageResponse,
} from "./dto/send/send";

export const endpoints = {
  send: endpoint({
    url: `/{number_id}/messages`,
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    request: {
      body: data<WhatsappSendMessageRequestBody<any>>(),
    },
    response: data<WhatsappSendMessageResponse>(),
  }),
};
