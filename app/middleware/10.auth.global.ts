export default defineNuxtRouteMiddleware((to) => {
  const { loginPath, ignorePaths } = useAppConfig().auth

  // 로그인 페이지 혹은 인증 무시 경로일 경우 미들웨어 실행 종료
  if (to.path === loginPath || ignorePaths.includes(to.path)) {
    return
  }

  // 사용자 인증 정보를 통한 로그인 여부 확인
  const auth = useAuthStore()
  if (auth.isLoggedIn) {
    return
  }

  // TODO: 리프래시 토큰을 이용해 로그인 여부 확인

  // 로그인 페이지로 이동
  return navigateTo(loginPath)
})
