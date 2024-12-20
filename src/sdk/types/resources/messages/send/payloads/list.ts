import { WaInteractiveBase } from "graph-api/types/resources/messages/send/payloads/interactive";

export type WaSDKOutgoingListMessage = Omit<WaInteractiveBase, "type"> & {
  type: "list";
  list: {
    buttonText: string;
    sections: Array<{
      rows: Array<{
        id: string;
        title: string;
        description?: string;
      }>;
      title: string;
    }>;
  };
};
