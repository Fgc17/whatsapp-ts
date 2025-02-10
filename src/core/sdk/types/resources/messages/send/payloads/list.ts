import type { WaInteractiveBase } from "src/core/graph-api";

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
