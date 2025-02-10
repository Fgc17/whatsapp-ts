import { commands } from "./commands";

const runner = (name: keyof typeof commands) => {
	if (name in commands) {
		return commands[name]();
	}

	console.error(`Command "${name}" not found.`);
	process.exit(1);
};

const main = () => {
	const commandName = process.argv[2] as keyof typeof commands;

	if (!commandName) {
		console.error("Please provide a command to run.");
		process.exit(1);
	}

	runner(commandName);
};

main();
