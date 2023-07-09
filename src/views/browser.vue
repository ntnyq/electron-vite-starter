<script lang="ts" setup>
const route = useRoute()
const router = useRouter()

const url = ref(route.params.url as string)

const handleGoBack = () => {
  router.back()
}
</script>

<template>
  <div h-screen>
    <div
      flex="~"
      relative
      z-10000
      h-18
      w-full
      items-center
      px-4
      shadow-xl
    >
      <button
        @click="handleGoBack"
        type="button"
        role="button"
        text-gray
      >
        <div class="i-carbon-arrow-left h-8 w-8"></div>
      </button>
    </div>
    <iframe
      :src="url"
      h-full
      w-full
    />
  </div>
</template>
