import { ExtractedFStringParams } from "graph-api/lib/extract-params";

export type Defined<T> = Exclude<T, undefined>;

export type HttpMethod = "get" | "post" | "put" | "delete" | "patch";

export type RequestData = Record<string, any>;

export type IRequest = {
  body?: RequestData;
  query?: RequestData;
  headers?: RequestData;
};

export type IResponse = any;

export const data = <B extends RequestData = RequestData>() => null as any as B;

export const endpoint = <
  U extends string,
  M extends HttpMethod,
  Req extends IRequest,
  Res extends IResponse,
>(
  e: Endpoint<U, M, Req, Res>
) => e;

export type Endpoint<
  Url extends string,
  Method extends HttpMethod,
  Req extends IRequest,
  Res extends IResponse = any,
> = {
  url: Url;
  method: Method;
  headers?: RequestData;
  request?: Req;
  response?: Res;
};

export type SettingParams =
  | "waba_id"
  | "number_id"
  | "app_id"
  | "access_token"
  | "version";

export type Params<E extends Endpoint<any, any, any>> = Omit<
  ExtractedFStringParams<E["url"]>,
  SettingParams
>;

export type ExcludeUndefinedEntries<T> = {
  [K in keyof T]: T[K] extends undefined ? never : K;
};

export type ConsumeData<E extends Endpoint<any, any, any>> = E["request"] &
  (Params<E> extends {}
    ? {} extends Params<E>
      ? {}
      : { params: Params<E> }
    : {});
