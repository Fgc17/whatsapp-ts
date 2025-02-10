import { endpoint, data } from "src/core/graph-api/lib/utils";
import type {
	WhatsappSendMessageRequestBody,
	WhatsappSendMessageResponse,
} from "./dto/send/send";
import type { AnyType } from "core/utils/types";

export const endpoints = {
	send: endpoint({
		url: "/{number_id}/messages",
		method: "post",
		headers: {
			"Content-Type": "application/json",
		},
		request: {
			body: data<WhatsappSendMessageRequestBody<AnyType>>(),
		},
		response: data<WhatsappSendMessageResponse>(),
	}),
};
