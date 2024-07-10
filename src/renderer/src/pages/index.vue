<script setup lang="ts">
const ipcHandle = () => window.electron.ipcRenderer.send('ping')
</script>

<template>
  <img
    alt="logo"
    class="logo"
    src="@renderer/assets/electron.svg"
  />
  <div class="creator">Powered by electron-vite</div>
  <div class="text">
    <span class="text-red">Build an Electron app with</span>
    <span class="vue">Vue</span>
    and
    <span class="ts">TypeScript</span>
  </div>
  <p class="tip">Please try pressing <code>F12</code> to open the devTool</p>
  <div class="actions">
    <div class="action">
      <RouterLink to="/about">About</RouterLink>
    </div>
    <div class="action">
      <a
        @click="ipcHandle"
        target="_blank"
        rel="noreferrer"
      >
        Send IPC
      </a>
    </div>
  </div>
  <Versions />
</template>
