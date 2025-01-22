import type { RouteLocationRaw } from '#vue-router'

export default defineAppConfig({
  /** 인증/인가 설정 */
  auth: {
    loginPath: '/sign-in' as RouteLocationRaw,
    ignorePaths: [] as RouteLocationRaw[],
  },
})
