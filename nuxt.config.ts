// noinspection ES6PreferShortImport

import { $development } from './config/nuxt.dev'
import { APP_ID, APP_PREFIX, DEFAULT_LOCALE } from './shared/constants'

export default defineNuxtConfig({
  modules: ['@nuxt/eslint', 'nuxt-security', 'nuxt-i18n-micro'],

  $development,

  app: {
    rootAttrs: {
      id: APP_ID,
    },
  },

  routeRules: {
    // 전체 경로에 대한 기본 설정
    // 페이지 별 설정은 각 vue 파일 내 `defineRouteRules` 함수를 통해 설정`
    '/**': {
      prerender: true,
    },
  },

  future: {
    compatibilityVersion: 4,
    typescriptBundlerResolution: true,
  },

  experimental: {
    typedPages: true,
    buildCache: true,
    inlineRouteRules: true,
  },

  compatibilityDate: '2025-01-01',

  nitro: {
    preset: 'node-cluster',
    storage: {
      cache: {
        driver: 'memory',
      },
    },
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  i18n: {
    meta: true,
    types: true,
    translationDir: 'shared/locales/',
    apiBaseUrl: 'locales',
    localeCookie: `${APP_PREFIX}_LOCALE`,

    strategy: 'no_prefix',
    autoDetectLanguage: true,
    defaultLocale: DEFAULT_LOCALE,
    fallbackLocale: DEFAULT_LOCALE,
    locales: [
      { code: 'ko-KR' },
    ],
  },

  security: {
    strict: true,
    basicAuth: false,
    rateLimiter: false,

    sri: true,
    csrf: true,
    nonce: true,
    ssg: {
      meta: true,
      hashScripts: true,
      hashStyles: false,
    },
  },
})
