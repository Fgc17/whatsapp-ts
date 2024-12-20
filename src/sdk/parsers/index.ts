import { flowResponse } from "./toGraph/flow-response";
import { sendMessage } from "./toGraph/send-message";
import { webhook } from "./toSDK/webhook";

export const parsers = {
  toGraph: {
    sendMessage,
    flowResponse,
  },
  toSDK: {
    webhook,
  },
};
