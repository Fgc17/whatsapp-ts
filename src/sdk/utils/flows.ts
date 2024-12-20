const getToken = ({
  flow_name,
  chatId,
}: {
  flow_name: string;
  chatId: string;
}) => {
  return `${flow_name}?chat_id=${chatId}`;
};

const getName = (token: string) => {
  return token.split("?")[0]!;
};

const getParams = (token: string) => {
  const paramsString = token.split("?")[1];

  const params = new URLSearchParams(paramsString);

  return {
    chatId: params.get("chat_id")!,
  };
};

export const flows = {
  getToken,
  getName,
  getParams,
};
