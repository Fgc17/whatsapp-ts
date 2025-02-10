import {
	endpoints,
	type ISOCountryCode,
	type WhatsappRegisterPhoneNumberRequestBody,
} from "src/core/graph-api/index";
import { consume } from "src/core/graph-api/lib/consume";

interface Payload {
	pin: string;
	dataRegion?: ISOCountryCode;
}

async function registerNumber({ dataRegion, pin }: Payload) {
	const endpoint = endpoints.waba.registerNumber;

	const body: WhatsappRegisterPhoneNumberRequestBody = {
		messaging_product: "whatsapp",
		data_localization_region: dataRegion,
		pin,
	};

	return await consume(
		endpoint,
		{
			body,
		},
		{
			asUrlEncoded: true,
		},
	);
}

export { registerNumber };
