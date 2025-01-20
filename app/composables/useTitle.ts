export const useTitle = (): Ref<string | null> => {
  const { t } = useI18n()
  return computed(() => t('page.title', {}, null) as string)
}
