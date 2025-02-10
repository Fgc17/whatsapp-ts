const createToken = ({
	flow_name,
	flow_identifier,
	chatId,
}: {
	flow_name: string;
	flow_identifier?: string;
	chatId: string;
}) => {
	const params = new URLSearchParams({
		chat_id: chatId,
	});

	if (flow_identifier) {
		params.set("flow_identifier", flow_identifier);
	}

	return `${flow_name}?${decodeURIComponent(params.toString())}`;
};

const getName = (token: string) => {
	return token.split("?")[0];
};

const getParams = (token: string) => {
	const flowName = getName(token);

	let paramsString = token.split("?")?.[1];

	if (paramsString?.[0] === "&") {
		paramsString = paramsString.slice(1);
	}

	const params = new URLSearchParams(paramsString);

	return {
		paramsString,
		flowName,
		chatId: params.get("chat_id") || params.get("chatId"),
		flowIdentifier:
			params.get("flow_identifier") || params.get("flowIdentifier"),
	};
};

export const flows = {
	createToken,
	getName,
	getParams,
};
