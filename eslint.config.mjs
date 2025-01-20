// @ts-check

import antfu from '@antfu/eslint-config'
import security from 'eslint-plugin-security'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    stylistic: false,
    formatters: true,
  }),

  security.configs.recommended,
)
