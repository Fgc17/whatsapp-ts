import { endpoint, data } from "src/core/graph-api/lib/utils";
import type {
	WhatsappCreateFlowRequestBody,
	WhatsappCreateFlowResponse,
} from "./dto/create";
import type {
	WhatsappFlowUpdateMetadataRequestBody,
	WhatsappFlowUpdateMetadataResponse,
} from "./dto/update-metadata";
import type {
	WhatsappUpdateFlowJsonRequestBody,
	WhatsappUpdateFlowJsonResponse,
} from "./dto/update-json";
import type { WhatsappGetFlowsRequestQuery } from "./dto/get";
import type { WhatsappGetManyFlowsRequestResponse } from "./dto/get-many";
import type { WhatsappDeleteFlowResponse } from "./dto/delete";
import type { WhatsappGetFlowWebPreviewURLResponse } from "./dto/webpreview";
import type { WhatsappPublishFlowResponse } from "./dto/publish";

export const endpoints = {
	create: endpoint({
		url: "/{waba_id}/flows",
		method: "post",
		headers: {
			"Content-Type": "application/json",
		},
		request: {
			body: data<WhatsappCreateFlowRequestBody>(),
		},
		response: data<WhatsappCreateFlowResponse>(),
	}),
	updateMetadata: endpoint({
		url: "/{flow_id}",
		method: "post",
		headers: {
			"Content-Type": "application/json",
		},
		request: {
			body: data<WhatsappFlowUpdateMetadataRequestBody>(),
		},
		response: data<WhatsappFlowUpdateMetadataResponse>(),
	}),
	readMany: endpoint({
		url: "/{waba_id}/flows",
		method: "get",
		response: data<WhatsappGetManyFlowsRequestResponse>(),
	}),
	delete: endpoint({
		url: "/{flow_id}",
		method: "delete",
		response: data<WhatsappDeleteFlowResponse>(),
	}),
	read: endpoint({
		url: "/{flow_id}",
		method: "get",
		request: {
			query: data<WhatsappGetFlowsRequestQuery>(),
		},
		response: data<WhatsappGetManyFlowsRequestResponse>(),
	}),
	updateJson: endpoint({
		url: "/{flow_id}/assets",
		method: "post",
		request: {
			body: data<WhatsappUpdateFlowJsonRequestBody>(),
		},
		response: data<WhatsappUpdateFlowJsonResponse>(),
	}),
	getPreview: endpoint({
		url: "/{flow_id}?fields=preview.invalidate(false)",
		method: "get",
		response: data<WhatsappGetFlowWebPreviewURLResponse>(),
	}),
	publish: endpoint({
		url: "/{flow_id}/publish",
		method: "post",
		response: data<WhatsappPublishFlowResponse>(),
	}),
};
