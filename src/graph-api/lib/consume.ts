import { settings } from "src/settings";
import {
  HttpMethod,
  Endpoint,
  ConsumeData,
  IRequest,
  IResponse,
  Defined,
} from "./utils";
import { whatsapp } from "src";

export async function consume<
  U extends string,
  M extends HttpMethod,
  Req extends IRequest,
  Res extends IResponse,
  E extends Endpoint<U, M, Req, Res>,
>(
  e: E,
  data: ConsumeData<E>,
  options?: {
    asFormData: boolean;
  }
) {
  const version = settings.get("GRAPH_API_VERSION");
  const accessToken = settings.get("META_APP_ACCESS_TOKEN");
  const baseUrl = `https://graph.facebook.com/v${version}`;
  const baseHeaders = {
    Authorization: `Bearer ${accessToken}`,
  };

  let url = e.url as string;

  const headers = {
    ...baseHeaders,
    ...e.headers,
    ...data.headers,
  };

  const query = new URLSearchParams(data.query).toString();

  if (url[0] === "/") {
    url = url.slice(1);
  }

  url = `${baseUrl}/${url}`;

  if (query) {
    url = `${url}?${query}`;
  }

  const waba_id = settings.get("WHATSAPP_ACCOUNT_ID");
  const number_id = settings.get("WHATSAPP_NUMBER_ID");

  const params = {
    waba_id,
    number_id,
    ...(data as any).params,
  };

  for (const key in params) {
    url = url.replace(`{${key}}`, params[key]);
  }

  const unparsedBody = data.body;

  let body: FormData | string | undefined;

  if (unparsedBody && options?.asFormData) {
    const formData = new FormData();
    Object.entries(unparsedBody).forEach(([key, value]) => {
      formData.append(key, value);
    });
    body = formData;
  } else {
    body = JSON.stringify(unparsedBody);
  }

  return await fetch(url, {
    method: e.method,
    headers: headers,
    body,
  })
    .then((res) => res.json())
    .then((json) => {
      if ("error" in json) {
        throw {
          response: {
            data: json.error,
          },
        };
      }

      return json as Defined<E["response"]>;
    })
    .catch(async (err) => {
      throw err.response.data;
    });
}
