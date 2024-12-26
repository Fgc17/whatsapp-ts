import * as crud from "./flows/crud";
import { send } from "./messages/send";
import { encryption } from "./waba/upload/encryption";

export const actions = {
  messages: {
    send,
  },
  flows: {
    ...crud,
  },
  waba: {
    upload: {
      encryption,
    },
  },
};
