// noinspection ES6PreferShortImport

import { $development } from './config/nuxt.dev'
import { APP_ID, APP_PREFIX, DEFAULT_LOCALE } from './shared/constants'

export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@pinia/nuxt', 'nuxt-security', 'nuxt-i18n-micro', 'radix-vue/nuxt'],

  $development,

  app: {
    rootAttrs: {
      id: APP_ID,
    },
  },

  runtimeConfig: {
    database: {
      location: '',
      token: '',
    },

    // 이 하위의 항목은 HTTP 및 HTML 등을 통해 노출되므로 보안상 주의
    public: {},

    nitro: {
      envPrefix: `${APP_PREFIX}_`,
      envExpansion: true,
    },
  },

  routeRules: {
    // 전체 경로에 대한 기본 설정
    // 페이지 별 설정은 각 vue 파일 내 `defineRouteRules` 함수를 통해 설정`
    '/**': {
      prerender: true,
    },
  },
  watch: ['./config/**/*'],

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

    database: {
      default: {
        connector: 'libsql-node',
        options: {},
      },
    },

    experimental: {
      database: true,
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

  pinia: {},

  radix: {
    prefix: 'base',
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
