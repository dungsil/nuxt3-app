<script lang="ts" setup>
import { APP_NAME, TITLE_SEPARATOR } from '#shared/constants'

const title = useTitle()
const nonce = useNonce()
useSeoMeta({
  title,
  titleTemplate: (title?: string) => title ? `${title}${TITLE_SEPARATOR}${APP_NAME}` : APP_NAME,
})
</script>

<template>
  <base-config-provider :nonce="nonce" :scroll-body="false">
    <slot />
  </base-config-provider>
</template>
