import { throwError } from '#shared/error'

export default defineComponent({
  render: () => h('div'), // 빈 페이지

  setup() {
    defineRouteRules({
      prerender: false, // 서버 단 내에서 처리해야하므로 사전 렌더링 불가
    })

    throwError({
      code: 'NOT_FOUND',
      critical: true, // 페이지가 존재하지 않는 경우 기존 레이아웃을 불러올 수 없으니 중요한 오류로 처리
    })
  },
})
