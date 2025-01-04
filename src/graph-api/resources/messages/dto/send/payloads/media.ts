export type WaOutgoingMediaMessage =
  | {
      id: string;
      caption?: string;
    }
  | {
      link: string;
      caption?: string;
    };
