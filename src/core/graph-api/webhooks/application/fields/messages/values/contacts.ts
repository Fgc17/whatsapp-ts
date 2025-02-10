export interface WaIncomingContactObject {
	wa_id: string;
	profile: {
		name: string;
	};
}

export type WaIncomingContacts = Array<WaIncomingContactObject>;
