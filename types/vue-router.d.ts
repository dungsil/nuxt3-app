import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    /** 현재 페이지 제목 */
    title?: string | null

    /**
     * 제목을 렌더링 할 때 i18n 키가 아닌 원시 문자열을 사용할지 여부
     *
     * @default false
     */
    titleRaw?: boolean
  }
}
