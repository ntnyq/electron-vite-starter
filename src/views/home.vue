<script lang="ts" setup>
import clipboard from 'clipboardy'
import { waitFor } from '@/utils'

const router = useRouter()

const hasCopied = ref(false)
const handleCopy = async () => {
  hasCopied.value = true
  await clipboard.write('Hello world')
  await waitFor(2e3)
  hasCopied.value = false
}
const handleGoWebview = () => {
  router.push({
    name: 'Browser',
    params: { url: 'https://juejin.cn' },
  })
}
</script>

<template>
  <div
    flex="~ col"
    min-h-screen
    items-center
    justify-center
  >
    <h1
      text="center 5xl red"
      mb-10
    >
      Hello world
    </h1>
    <div
      flex="~ col"
      class="md:flex-row"
      gap-5
    >
      <button
        @click="handleGoWebview"
        flex="~"
        border="~ blue-600/30"
        bg="blue-600/90"
        class="px-8 py-3 text-white sm:mb-0 btn hover:(border-blue-800 bg-blue-800)"
        type="button"
        role="button"
        gap-2
        rounded-3xl
      >
        <div class="i-carbon-logo-github h-6 w-6"></div>
        Primary
      </button>
      <button
        @click="handleCopy"
        flex="~"
        border="~ gray-800"
        bg="gray-900"
        class="px-8 py-3 text-white sm:mb-0 btn hover:(border-gray-800 bg-gray-700)"
        type="button"
        role="button"
        gap-2
        rounded-3xl
      >
        <div
          v-if="hasCopied"
          class="i-carbon-checkbox-checked h-6 w-6"
        />
        <div
          v-else
          class="i-carbon-copy h-6 w-6"
        />
        Copy Text
      </button>
    </div>
  </div>
</template>
