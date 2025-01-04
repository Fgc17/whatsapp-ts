import {
  WhatsappFlowUpdateMetadataRequestBody,
  WhatsappGetFlowsRequestResponse,
  WhatsappGetFlowWebPreviewPageRequestQuery,
} from "graph-api";
import { consume } from "graph-api/lib/consume";
import { endpoints } from "graph-api/resources/endpoints";
import { WhatsappCreateFlowRequestBody } from "graph-api/resources/flows/dto/create";

export async function create(body: WhatsappCreateFlowRequestBody) {
  const endpoint = endpoints.flows.create;

  return consume(endpoint, {
    body,
  });
}

export async function updateMetadata(
  flow_id: string,
  body: WhatsappFlowUpdateMetadataRequestBody
) {
  const endpoint = endpoints.flows.updateMetadata;

  const response = await consume(endpoint, {
    body,
    params: {
      flow_id: flow_id,
    },
  });

  return response;
}

export async function updateJson(flow_id: string, json: Record<string, any>) {
  const endpoint = endpoints.flows.updateJson;

  const body = {
    name: "flow.json",
    asset_type: "FLOW_JSON",
    file: new Blob([JSON.stringify(json, null, 2)], {
      type: "application/json",
    }),
  } as const;

  return consume(
    endpoint,
    {
      params: {
        flow_id,
      },
      body,
    },
    {
      asFormData: true,
    }
  );
}

export async function getPreview(
  flow_id: string,
  query?: WhatsappGetFlowWebPreviewPageRequestQuery
) {
  const endpoint = endpoints.flows.getPreview;

  const { preview } = await consume(endpoint, {
    params: {
      flow_id,
    },
  });

  const url = preview.preview_url.replaceAll("\\", "");

  const stringfiedSettings = Object.entries(query ?? {}).reduce(
    (acc, [key, value]) => {
      if (key === "flow_action_payload") {
        acc[key] = encodeURIComponent(JSON.stringify(value));
      } else {
        acc[key] = value.toString();
      }

      return acc;
    },
    {} as Record<string, string>
  );

  const queryParams = new URLSearchParams(stringfiedSettings);

  const previewUrl = `${url}&${queryParams.toString()}`;

  return previewUrl;
}

export async function deleteFlow(flow_id: string) {
  const endpoint = endpoints.flows.delete;

  return consume(endpoint, {
    params: {
      flow_id: flow_id,
    },
  });
}

export async function get(
  flow_id: string,
  query?: {
    fields: Array<keyof WhatsappGetFlowsRequestResponse>;
  }
) {
  const endpoint = endpoints.flows.read;

  return consume(endpoint, {
    params: {
      flow_id: flow_id,
    },
    query: {
      fields: query?.fields.join(",") ?? "",
    },
  });
}

export async function getMany() {
  const endpoint = endpoints.flows.readMany;

  return consume(endpoint, {});
}

export async function publish(flow_id: string) {
  const endpoint = endpoints.flows.publish;

  return consume(endpoint, {
    params: {
      flow_id,
    },
  });
}
