export type WhatsappFlowUpdateMetadataRequestBody = {
  name?: string;
  categories?: string[];
  endpoint_uri?: string;
  application_id?: string;
};

export type WhatsappFlowUpdateMetadataResponse = {
  success: boolean;
};
