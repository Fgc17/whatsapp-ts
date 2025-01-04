export type WaIncomingErrorObject = {
  code: number;
  title: string;
  message: string;
  error_data: {
    details: string;
  };
};

export type WaIncomingErrors = Array<WaIncomingErrorObject>;
