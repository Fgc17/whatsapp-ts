import { endpoints } from "graph-api/endpoints";
import { env } from "env";
import { actions } from "./sdk/actions";
import { security } from "./sdk/security";
import { parsers } from "./sdk/parsers";
import { utils } from "./sdk/utils";

export * from "./sdk/types";
export * from "./graph-api/types";

export const whatsapp = {
  sdk: {
    actions,
    utils,
    security,
    parsers,
  },
  graph: {
    endpoints,
  },
  env,
};
