export type RemoveQuotes<T extends string> = T extends `'${infer Inside}'` ? Inside : T
