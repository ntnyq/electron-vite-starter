<script lang="ts" setup>
import { toggleDark } from '@renderer/composables/dark'
import { Tooltip } from 'floating-vue'
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
      <Tooltip>
        <button
          @click="toggleDark"
          class="btn-action"
          type="button"
          role="button"
        >
          <div class="i-ri-sun-line dark:i-ri-moon-line" />
        </button>
        <template #popper>Toggle Color Mode</template>
      </Tooltip>
      <Tooltip>
        <a
          href="https://github.com/ntnyq/electron-vite-starter"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-action"
          role="button"
        >
          <div class="i-ri-github-fill" />
        </a>
        <template #popper>View Source Code</template>
      </Tooltip>
    </div>
  </div>
</template>
