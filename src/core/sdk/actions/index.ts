import * as crud from "./flows/crud";
import * as unnoficial from "./flows/unnoficial";
import { send } from "./messages/send";
import { uploadWabaEncryption } from "./waba/encryption/upload";
import { registerNumber } from "./waba/register-number";

export const actions = {
	messages: {
		send,
	},
	flows: {
		...crud,
		unnoficial,
	},
	waba: {
		registerNumber,
		encryption: {
			upload: uploadWabaEncryption,
		},
	},
};
