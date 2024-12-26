import { endpoints } from "graph-api/endpoints";
import {
  WhatsappCreateFlowRequestBody,
  WhatsappUpdateFlowMetadataRequestBody,
  WhatsappUpdateFlowJsonRequestBody,
  WhatsappCreateWebPreviewRequestQuery,
  WhatsappGetFlowsRequestQuery,
} from "graph-api/types/resources/flows/crud";

export async function create(body: WhatsappCreateFlowRequestBody) {
  const endpoint = endpoints().flows.create;

  return await fetch(endpoint.url, {
    method: endpoint.method,
    headers: endpoint.headers,
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .catch((err) => {
      throw err.response?.data || err;
    });
}

export async function updateMetadata(
  flowId: string,
  body: WhatsappUpdateFlowMetadataRequestBody
) {
  const endpoint = endpoints().flows.updateMetadata;

  return await fetch(endpoint.url(flowId), {
    method: endpoint.method,
    headers: endpoint.headers,
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .catch((err) => {
      throw err.response?.data || err;
    });
}

export async function updateJson(
  flowId: string,
  body: WhatsappUpdateFlowJsonRequestBody
) {
  const endpoint = endpoints().flows.updateJson;

  const formData = new FormData();
  formData.append("name", body.name);
  formData.append("asset_type", body.asset_type);
  formData.append("file", body.file);

  return await fetch(endpoint.url(flowId), {
    method: endpoint.method,
    headers: endpoint.headers,
    body: formData,
  })
    .then((res) => res.json())
    .catch((err) => {
      throw err.response?.data || err;
    });
}

export async function createWebPreview(flowId: string) {
  const endpoint = endpoints().flows.createPreview;

  return await fetch(endpoint.url(flowId), {
    method: endpoint.method,
    headers: endpoint.headers,
  })
    .then((res) => res.json())
    .catch((err) => {
      throw err.response?.data || err;
    });
}

export async function deleteFlow(flowId: string) {
  const endpoint = endpoints().flows.delete;

  return await fetch(endpoint.url(flowId), {
    method: endpoint.method,
    headers: endpoint.headers,
  })
    .then((res) => res.json())
    .catch((err) => {
      throw err.response?.data || err;
    });
}

export async function get(flowId: string) {
  const endpoint = endpoints().flows.read;

  return await fetch(endpoint.url(flowId), {
    method: endpoint.method,
    headers: endpoint.headers,
  })
    .then((res) => res.json())
    .catch((err) => {
      throw err.response?.data || err;
    });
}

export async function getMany() {
  const endpoint = endpoints().flows.readMany;

  return await fetch(endpoint.url, {
    method: endpoint.method,
    headers: endpoint.headers,
  })
    .then((res) => res.json())
    .catch((err) => {
      throw err.response?.data || err;
    });
}
