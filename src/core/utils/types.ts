// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type AnyType = any;

export type Defined<T> = Exclude<T, undefined>;
