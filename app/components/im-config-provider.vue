<script lang="ts" setup>
import { APP_NAME, TITLE_SEPARATOR } from '#shared/constants'

const title = useTitle()
useSeoMeta({
  title,
  titleTemplate: (title?: string) => title ? `${title}${TITLE_SEPARATOR}${APP_NAME}` : APP_NAME,
})
</script>

<template>
  <div>
    <slot />
  </div>
</template>
