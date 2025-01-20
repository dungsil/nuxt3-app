<script lang="ts" setup>
import DefaultErrorLayout from '~/layouts/default-error.vue'

const error = useErrorInfo()
const isCritical = useIsCriticalError() // 전체화면 오류를 표시할지 여부

// 단독 페이지인 경우에만 SEO 메타를 설정
if (isCritical) {
  useServerSeoMeta({
    title: error.value.code,
  })
}
</script>

<template>
  <component :is="isCritical ? DefaultErrorLayout : 'div'">
    <p>{{ error }} {{ isCritical }}</p>
  </component>
</template>
