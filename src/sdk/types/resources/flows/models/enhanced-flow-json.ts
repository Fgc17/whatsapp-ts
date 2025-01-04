import { WhatsappGetFlowWebPreviewPageRequestQuery } from "graph-api/resources/flows/dto/webpreview";
import { FlowMetadata } from "graph-api/resources/flows/models/flow-metadata";

export type EnhancedFlowJSON = {
  id?: string;
  metadata: FlowMetadata;
  preview: WhatsappGetFlowWebPreviewPageRequestQuery;
  version: any;
  data_api_version: any;
  routing_model: any;
  screens: any;
  meta: any;
};
