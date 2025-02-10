import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/core/core.ts", "src/cli/cli.ts"],
	dts: true,
	shims: true,
	clean: true,
});
