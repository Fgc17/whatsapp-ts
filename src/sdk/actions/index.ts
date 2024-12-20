import { send } from "./messages/send";
import { flowsEncryption } from "./upload/flows-encryption/upload";

export const actions = {
  messages: {
    send,
  },
  upload: {
    flowsEncryption,
  },
};
