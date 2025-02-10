export type MediaTypes = "sticker" | "audio" | "document" | "image" | "video";

export type WaOutgoingImageMessage =
	| {
			id: string;
			caption?: string;
	  }
	| {
			link: string;
			caption?: string;
	  };

export type WaOutgoingDocumentMessage =
	| {
			id: string;
			caption?: string;
			filename?: string;
	  }
	| {
			link: string;
			caption?: string;
			filename?: string;
	  };

export type WaOutgoingAudioMessage =
	| {
			id: string;
			caption?: string;
	  }
	| {
			link: string;
			caption?: string;
	  };

export type WaOutgoingVideoMessage =
	| {
			id: string;
			caption?: string;
	  }
	| {
			link: string;
			caption?: string;
	  };

export type WaOutgoingStickerMessage =
	| {
			id: string;
	  }
	| {
			link: string;
	  };
