import * as crud from "./flows/crud";
import * as unnoficial from "./flows/unnoficial";
import { send } from "./messages/send";
import { encryption } from "./waba/upload/encryption";

export const actions = {
  messages: {
    send,
  },
  flows: {
    ...crud,
    unnoficial,
  },
  waba: {
    upload: {
      encryption,
    },
  },
};
