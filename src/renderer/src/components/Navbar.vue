<script lang="ts" setup>
import { toggleDark } from '@renderer/composables/useDark'
import { version } from '../../../../package.json'

const appTitle = import.meta.env.VITE_APP_TITLE
</script>

<template>
  <div
    class="h-$h-navbar flex flex-wrap items-center justify-between border-b border-base p-2 px-4"
  >
    <div class="flex gap-1">
      <h1 class="text-xl font-semibold">{{ appTitle }}</h1>
      <small class="font-500">{{ version }}</small>
    </div>
    <div class="flex items-center gap-2">
      <button
        @click="toggleDark"
        class="btn-icon"
        type="button"
        role="button"
      >
        <div class="i-ri-sun-line dark:i-ri-moon-line" />
      </button>
      <a
        href="https://github.com/ntnyq/starter-electron-vite"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-icon"
        role="button"
      >
        <div class="i-ri-github-fill" />
      </a>
    </div>
  </div>
</template>
