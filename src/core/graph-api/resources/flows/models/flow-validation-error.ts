export type WhatsappFlowValidationError = Array<{
	error: string;
	error_type: string;
	message: string;
	line_start: number;
	line_end: number;
	column_start: number;
	column_end: number;
}>;
