import type { NuxtConfig } from '@nuxt/schema'
import process from 'node:process'

const {
  APP_PORT = '443',
  APP_PUBLIC_URL = `https://localhost:${APP_PORT}`,
  APP_HTTPS_CERTIFICATE,
  APP_HTTPS_CERTIFICATE_KEY,
} = process.env

const port = Number(APP_PORT)
const { hostname } = new URL(APP_PUBLIC_URL)

export const $development: NuxtConfig = {
  devtools: {
    enabled: true,
  },

  devServer: {
    port,

    https: {
      cert: APP_HTTPS_CERTIFICATE,
      key: APP_HTTPS_CERTIFICATE_KEY,
    },
  },

  vite: {
    server: {
      allowedHosts: [hostname],
    },
  },

  nitro: {
    devStorage: {
      cache: {
        driver: 'fs',
        base: '.nuxt/cache',
      },
    },
  },

  eslint: {
    config: {
      standalone: false,

      stylistic: {
        indent: 2,

        semi: false,
        arrowParens: true,
        blockSpacing: true,

        quotes: 'single',
        quoteProps: 'as-needed',

        braceStyle: '1tbs',
        commaDangle: 'always-multiline',
      },
    },
  },
}
