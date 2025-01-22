interface JoinAffixOptions {
  /** @default ',' */
  delimiter?: string

  /** @default '"' */
  prefix?: string

  /** @default '"' */
  suffix?: string
}

export function joinAffix<T>(list: T[], { delimiter = ',', prefix = '"', suffix = '"' }: JoinAffixOptions): string {
  return list.map((item) => `${prefix}${item}${suffix}`).join(delimiter)
}

export function joinWithQuote<T>(...list: T[]): string {
  return joinAffix<T>(list, { prefix: '\'', suffix: '\'' })
}
