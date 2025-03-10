<script lang="ts" setup>
import { APP_NAME, TITLE_SEPARATOR } from '#shared/constants'

const title = useTitle()
const nonce = useNonce()
const meta = useCurrentLocaleMeta()
const direction = computed(() => (meta.value.dir || 'ltr') as 'ltr' | 'rtl')

useSeoMeta({
  title,
  titleTemplate: (title?: string) => title ? `${title}${TITLE_SEPARATOR}${APP_NAME}` : APP_NAME,
})
</script>

<template>
  <base-config-provider
    :dir="direction"
    :locale="meta.code"
    :nonce="nonce"
    :scroll-body="false"
    :use-id="() => useId()"
  >
    <slot />
  </base-config-provider>
</template>
