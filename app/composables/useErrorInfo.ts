import type { ErrorInfo, NuxtErrorData } from '#shared/error'

export const useErrorInfo = (): Ref<ErrorInfo> => {
  const error = useError()

  return computed(() => {
    const data = error.value?.data

    // 기본 값 : 서버 오류
    if (!data || typeof data !== 'string') {
      return {
        code: 'SERVER_ERROR',
      }
    }

    // Json 문자열로 치환되므로 JSON.parse()를 사용하여 객체로 변환
    return (JSON.parse(data) as NuxtErrorData).errorInfo
  })
}
