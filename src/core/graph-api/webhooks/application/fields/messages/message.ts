import type { WaIncomingContacts } from "./values/contacts";
import type { WaIncomingErrors } from "./values/errors";
import type { WaIncomingMessageStatuses } from "./values/message-statuses";
import type { WaIncomingMessages } from "./values/messages";

export interface MetadataObject {
	/**
	 * Customer phone number
	 */
	display_phone_number: string;
	/**
	 * Customer phone number id
	 */
	phone_number_id: string;
}

export type MessageField = {
	value: {
		messaging_product: "whatsapp";
		metadata: MetadataObject;
		contacts: WaIncomingContacts;
		errors?: WaIncomingErrors;
		messages?: WaIncomingMessages;
		statuses?: WaIncomingMessageStatuses;
	};
	field: "messages";
};
