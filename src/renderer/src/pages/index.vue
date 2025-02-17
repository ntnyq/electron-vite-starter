<script setup lang="ts">
function handleSendIPC() {
  window.electron.ipcRenderer.send('ping')
}
</script>

<template>
  <div class="flex h-full items-center justify-center">
    <div class="flex gap-4 items-center">
      <RouterLink
        class="text-primary-500 px-2 py-1 border border-primary-500 rounded-md transition-colors dark:text-white hover:text-white dark:border-white hover:bg-primary-500 dark:hover:text-white"
        to="/about"
      >
        About
      </RouterLink>
      <a
        @click="handleSendIPC"
        class="text-primary-500 px-2 py-1 border border-primary-500 rounded-md cursor-pointer transition-colors dark:text-white hover:text-white dark:border-white hover:bg-primary-500 dark:hover:text-white"
        target="_blank"
        rel="noreferrer"
      >
        Send IPC
      </a>
    </div>
  </div>
</template>
