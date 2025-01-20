import type { NuxtErrorData } from '#shared/error'

/**
 * 해당 오류가 전체 화면에 표시되어야 하는지 체크한다
 */
export const useIsCriticalError = (): Ref<boolean> => {
  const error = useError()

  return computed(() => {
    const data = error.value?.data
    if (!data || typeof data !== 'string') {
      return false
    }

    return (JSON.parse(data) as NuxtErrorData).critical
  })
}
