import type { Locale } from 'nuxt-i18n-micro'

export function useCurrentLocaleMeta (): ComputedRef<Locale> {
  const { getLocales, getLocale, defaultLocale } = useI18n()

  return computed(() => getLocales().find(locale => locale.code === getLocale())
    || getLocales().find((locale) => locale.code === defaultLocale())
    || getLocales()[0]
  )
}
