/*! 오류 공통 정의 */

/** 오류 코드 정의 */
export const errorCodes = {
  INVALID_REQUEST: { status: 400 },
  REQUIRES_LOGIN: { status: 401 },
  PERMISSION_DENIED: { status: 403 },
  NOT_FOUND: { status: 404 },
  SERVER_ERROR: { status: 500 },
}

/** 오류 코드에 해당하는 상태 코드를 반환 */
export type ErrorCode = keyof typeof errorCodes

/** 실제 오류 응답 객체 */
export interface ErrorInfo {
  code: ErrorCode
}

interface ThrowErrorInput {
  code: ErrorCode

  /** @default {@linkcode code.status} */
  status?: number

  /**
   * 어플리케이션이 정상적으로 작동 불가능한 오류인 경우,
   *
   * 이 값이 `true`인 경우 오류 페이지를 page 내 삽입이 아닌 전체 화면으로 렌더링한다.
   *
   * @default false
   */
  critical?: boolean
}

/** Nuxt 내부적으로 저장되는 오류 정보 */
export interface NuxtErrorData {
  critical: boolean
  errorInfo: ErrorInfo
}

/**
 * 비지니스 예외를 발생시키고 오류 페이지를 렌더링한다.
 */
export const throwError = ({
  code,
  status = errorCodes[code as ErrorCode].status,
  critical = false,
}: ThrowErrorInput) => {
  throw createError<NuxtErrorData>({
    status,
    data: {
      critical,
      errorInfo: {
        code,
      },
    },
  })
}
