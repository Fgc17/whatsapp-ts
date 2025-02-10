import { readdirSync, statSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import type { EnhancedFlowJSON } from "src/core/sdk/types/resources/flows/models/enhanced-flow-json";
import { whatsapp } from "core";

async function readJsonFile(path: string) {
	const file = await readFile(path, "utf8");
	return JSON.parse(file);
}

export async function deployFlows() {
	const { data: currentCloudFlows } =
		await whatsapp.sdk.actions.flows.getMany();

	const hasValidationErrors = currentCloudFlows.some(
		(flow) => flow.validation_errors.length,
	);

	const validationErrors = currentCloudFlows
		.filter((flow) => flow.validation_errors.length)
		.map((flow) => ({
			name: flow.name,
			errors: flow.validation_errors,
		}));

	if (hasValidationErrors) {
		console.error("Validation errors found in the current flows:");
		console.error(JSON.stringify(validationErrors, null, 2));
		process.exit(1);
	}

	const flowFiles: string[] = [];
	const projectRoot = process.cwd();

	function walk(dir: string) {
		for (const fileOrDir of readdirSync(dir)) {
			const fullPath = join(dir, fileOrDir);
			const stats = statSync(fullPath);

			if (stats.isDirectory()) {
				if (
					["node_modules", "dist", ".git", ".next"].some((skip) =>
						fullPath.includes(skip),
					)
				) {
					continue;
				}
				walk(fullPath);
			} else {
				if (fullPath.match(/\.flow.json$/)) {
					flowFiles.push(fullPath);
				}
			}
		}
	}

	walk(projectRoot);

	const EnhancedFlowJSONCollection = [];
	for (const file of flowFiles) {
		try {
			const flow = (await readJsonFile(file)) as EnhancedFlowJSON;

			EnhancedFlowJSONCollection.push(flow);
		} catch (e) {
			console.error(`Error loading flow file ${file}: ${e}`);
		}
	}

	const flowsToUpdate = [] as EnhancedFlowJSON[];
	const flowsToCreate = [] as EnhancedFlowJSON[];

	for (const flow of EnhancedFlowJSONCollection) {
		const existingFlow = currentCloudFlows.find(
			(cloudFlow) => cloudFlow.name === flow.metadata.name,
		);

		if (!existingFlow) {
			flowsToCreate.push(flow);
			continue;
		}

		flowsToUpdate.push({
			...flow,
			id: existingFlow.id,
		});
	}

	const allFlows = [...flowsToUpdate, ...flowsToCreate];

	await Promise.all([
		flowsToCreate.map(async ({ metadata }) => {
			await whatsapp.sdk.actions.flows.create({
				name: metadata.name,
				categories: metadata.categories,
			});
		}),
	]);

	await Promise.all(
		allFlows.flatMap(async ({ preview, id, metadata, ...json }) => [
			await whatsapp.sdk.actions.flows.updateJson(id as string, json),
			await whatsapp.sdk.actions.flows.updateMetadata(id as string, metadata),
		]),
	);

	await Promise.all(
		allFlows.map(async ({ id }) => {
			await whatsapp.sdk.actions.flows.unnoficial.verifyFlowIntegrity(
				id as string,
			);
			await whatsapp.sdk.actions.flows.publish(id as string);
		}),
	);
}
