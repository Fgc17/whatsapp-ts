import {
  WhatsappFlowDecryptedBody,
  WhatsappFlowPingResponse,
} from "graph-api/types";

export type WaSDKFlowExchangeEventPayload = WhatsappFlowDecryptedBody & {
  pingResponse: WhatsappFlowPingResponse;
};
