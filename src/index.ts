import { endpoints } from "./graph-api/endpoints";
import { actions } from "./sdk/actions";
import { security } from "./sdk/security";
import { parsers } from "./sdk/parsers";
import { utils } from "./sdk/utils";
import { settings } from "./settings";

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
  settings,
};
