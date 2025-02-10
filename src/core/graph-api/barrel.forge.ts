import { BarrelForge, typeDeclarations } from "barrelsmith";

const basePath = "./src/core/graph-api";

export default BarrelForge({
	roots: [basePath + "/resources", basePath + "/webhooks"],
	output: basePath + "/index.ts",
	exports: [...typeDeclarations, "class"],
	append: [basePath + "/resources/endpoints.ts"],
});
