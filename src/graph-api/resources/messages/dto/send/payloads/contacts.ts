export type WaOutgoingContactsMessage = Array<{
  addresses: Array<
    Partial<{
      street: string;
      city: string;
      state: string;
      zip: string;
      country: string;
      country_code: string;
      type: string;
    }>
  >;
  birthday: `${number}${number}${number}${number}-${number}${number}-${number}${number}`;
  emails: Array<
    Partial<{
      email: string;
      type: string;
    }>
  >;
  name: {
    formatted_name: string;
    first_name?: string;
    last_name?: string;
    middle_name?: string;
    prefix?: string;
    suffix?: string;
  };
  org: Partial<{
    company: string;
    department: string;
    title: string;
  }>;
  phones: Array<
    Partial<{
      phone: string;
      type: string;
      wa_id: string;
    }>
  >;
  urls: Array<
    Partial<{
      url: string;
      type: string;
    }>
  >;
}>;
