<script setup lang="ts">
const ipcHandle = () => window.electron.ipcRenderer.send('ping')
</script>

<template>
  <div class="h-full flex items-center justify-center">
    <div class="flex items-center gap-4">
      <RouterLink
        class="border border-teal-500 rounded-md px-2 py-1 text-teal-500 transition-colors dark:border-white hover:bg-teal-500 dark:text-white hover:text-white dark:hover:text-white"
        to="/about"
      >
        About
      </RouterLink>
      <a
        @click="ipcHandle"
        class="cursor-pointer border border-teal-500 rounded-md px-2 py-1 text-teal-500 transition-colors dark:border-white hover:bg-teal-500 dark:text-white hover:text-white dark:hover:text-white"
        target="_blank"
        rel="noreferrer"
      >
        Send IPC
      </a>
    </div>
    <Versions />
  </div>
</template>
