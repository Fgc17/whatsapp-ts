import { ISOCountryCode } from "../models/iso-country-code";

export type WhatsappRegisterPhoneNumberRequestBody = {
  messaging_product: "whatsapp";
  pin: string;
  data_localization_region: ISOCountryCode;
};
