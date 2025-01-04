import {
  WhatsappSendMessageRequestConfig,
  WhatsappSendMessageRequestBody,
} from "graph-api";
import {
  WaSDKSendMessageConfig,
  WaSDKSendMessageBody,
} from "../../types/resources/messages/send/request";

const sendConfig = (
  arg: WaSDKSendMessageConfig
): WhatsappSendMessageRequestConfig => {
  const response: WhatsappSendMessageRequestConfig = {
    to: arg.to,
    messaging_product: "whatsapp",
    recipient_type: "individual",
  };

  if (arg.reply) response["context"] = arg.reply;

  if (arg.showUrlPreviewImage)
    response["preview_url"] = arg.showUrlPreviewImage;

  return response;
};

const flow = (
  arg: WaSDKSendMessageBody
): WhatsappSendMessageRequestBody<"interactive"> => {
  if (arg.message.type !== "flow") throw new Error("Invalid type");

  const { message: interactive, ...base } = arg;

  const { flow, ...interactiveBase } = interactive;

  const parsedSendConfig = sendConfig(base);

  if (!flow.mode) {
    flow.mode = process.env.NODE_ENV === "production" ? "published" : "draft";
  }

  return {
    type: "interactive",
    ...parsedSendConfig,
    interactive: {
      ...interactiveBase,
      type: "flow",
      action: {
        name: "flow",
        parameters: {
          flow_name: flow.name,
          flow_token: `${flow.token ?? flow.name}?&chat_id=${parsedSendConfig.to}`,
          flow_message_version: "3",
          flow_cta: flow.buttonText,
          flow_action: flow.action ?? "navigate",
          mode: flow.mode,
          ...(flow.payload && {
            flow_action_payload: {
              ...flow.payload,
              screen: flow.payload.screen.toUpperCase(),
            },
          }),
        },
      },
    },
  };
};

const text = (
  arg: WaSDKSendMessageBody
): WhatsappSendMessageRequestBody<"text"> => {
  if (arg.message.type !== "text") throw new Error("Invalid type");

  const { message: text, ...base } = arg;

  const parsedSendConfig = sendConfig(base);

  const parsed: WhatsappSendMessageRequestBody<"text"> = {
    type: "text",
    text: {
      body: text.text,
    },
    ...parsedSendConfig,
  };

  if (arg.message.previewUrl)
    parsed.text!["preview_url"] = arg.message.previewUrl;

  return parsed;
};

const list = (
  arg: WaSDKSendMessageBody
): WhatsappSendMessageRequestBody<"interactive"> => {
  if (arg.message.type !== "list") throw new Error("Invalid type");

  const { message: interactive, ...base } = arg;

  const { list, type, ...interactiveBase } = interactive;

  const parsedSendConfig = sendConfig(base);

  const parsed: WhatsappSendMessageRequestBody<"interactive"> = {
    ...parsedSendConfig,
    type: "interactive",
    interactive: {
      ...interactiveBase,
      type,
      action: {
        button: list.buttonText,
        sections: list.sections,
      },
    },
  };

  return parsed;
};

const button = (
  arg: WaSDKSendMessageBody
): WhatsappSendMessageRequestBody<"interactive"> => {
  if (arg.message.type !== "button") throw new Error("Invalid type");

  const { message: interactive, ...base } = arg;

  const { buttons, type, ...interactiveBase } = interactive;

  const parsedSendConfig = sendConfig(base);

  const parsed: WhatsappSendMessageRequestBody<"interactive"> = {
    ...parsedSendConfig,
    type: "interactive",
    interactive: {
      ...interactiveBase,
      type,
      action: {
        buttons: buttons.map((b) => ({
          id: b.id,
          title: b.text,
          type: "reply",
        })),
      },
    },
  };

  return parsed;
};

const template = (
  arg: WaSDKSendMessageBody
): WhatsappSendMessageRequestBody<"template"> => {
  if (arg.message.type !== "template") throw new Error("Invalid type");

  const {
    message: { type, ...template },
    ...base
  } = arg;

  const parsedSendConfig = sendConfig(base);

  const parsed: WhatsappSendMessageRequestBody<"template"> = {
    ...parsedSendConfig,
    type,
    template: {
      ...template,
      language: {
        code: template.language,
      },
    },
  };

  parsed.template!.namespace = process.env.WHATSAPP_MESSAGE_NAMESPACE;

  return parsed;
};

const parsers = {
  flow,
  text,
  list,
  button,
  template,
};

const parseSendMessagePayloadToGraph = (body: WaSDKSendMessageBody) =>
  parsers[body.message.type](body as any);

export { parseSendMessagePayloadToGraph as sendMessage };
