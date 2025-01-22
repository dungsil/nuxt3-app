import { defineStore } from 'pinia'

export const AUTH_STORE_ID = 'auth'

export const useAuthStore = defineStore(AUTH_STORE_ID, () => {
  return {
    // getters
    isLoggedIn: computed(() => false), // TODO: 로그인 여부 확인
  }
})
