<script lang="ts" setup>

</script>

<template>
  <!-- 오류 페이지의 특수성에 맞게 config-provider 를 레이아웃 단에서 로드한다. -->
  <im-config-provider>
    <div>
      <h1>Error</h1>
      <slot />
    </div>
  </im-config-provider>
</template>
