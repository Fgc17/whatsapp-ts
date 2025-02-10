import { BarrelForge, typeDeclarations } from "barrelsmith";

export default BarrelForge({
	roots: ["./src/core/sdk"],
	output: "./src/core/sdk/index.ts",
	exports: ["const", ...typeDeclarations],
});
