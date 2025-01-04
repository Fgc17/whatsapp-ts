import { MessageField } from "./fields/messages/message";

export type WhatsappApplicationWebhookBody = {
  /**
   * Value will always be "whatsapp_business_account"
   */
  object: "whatsapp_business_account";
  /**
   * An array of entry objects. Each entry object contains an array of changes objects. Meta will send multiple entries in case there's a big load on their systems.
   */
  entry: Array<{
    /**
     * The WABA account id that is subscribed to the webhook. Useful when dealing with multiple numbers within the same company.
     */
    id: string;
    /**
     * An array of changes objects. Each changes object contains the value of the change and the field that was changed. Meta will send multiple changes in case there's a big load on their systems.
     */
    changes: Array<MessageField>;
  }>;
};
