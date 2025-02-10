import type { WaInteractiveBase } from "src/core/graph-api";

export type WaSDKButtonMessage = Omit<WaInteractiveBase, "type"> & {
	type: "button";
	buttons: Array<{
		id: string;
		text: string;
	}>;
};
