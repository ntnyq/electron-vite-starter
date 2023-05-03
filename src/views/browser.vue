<script lang="ts" setup>
const route = useRoute()

const url = ref(route.params.url as string)
</script>

<template>
  <div
    flex="~"
    h-screen
    items-center
    justify-center
  >
    <Webview
      :src="url"
      h-full
      w-full
    />
  </div>
</template>
