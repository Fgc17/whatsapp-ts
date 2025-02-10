export type WaSDKOutgoingMediaMessage =
	| {
			type: "media";
			sticker: {
				ref: string;
			};
	  }
	| {
			type: "media";
			image: {
				ref: string;
				caption?: string;
			};
	  }
	| {
			type: "media";
			document: {
				ref: string;
				caption?: string;
				filename?: string;
			};
	  }
	| {
			type: "media";
			audio: {
				ref: string;
				caption?: string;
			};
	  }
	| {
			type: "media";
			video: {
				ref: string;
				caption?: string;
			};
	  };
