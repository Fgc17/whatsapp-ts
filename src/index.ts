import { endpoints } from "./graph-api";
import { settings } from "./settings";
import { commands } from "./commands";
import * as sdk from "./sdk";

export * from "./sdk";
export * from "./graph-api";

export const whatsapp = {
  graph: {
    endpoints,
  },
  settings,
  sdk,
  commands,
};
