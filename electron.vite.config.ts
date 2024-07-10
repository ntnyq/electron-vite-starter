/**
 * @file Electron Vite Configuration
 */

import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import VueRouter from 'unplugin-vue-router/vite'
import AutoImport from 'unplugin-auto-import/vite'
import VueComponents from 'unplugin-vue-components/vite'
import { resolve } from './scripts/utils'

export default defineConfig({
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
      },
    },
    plugins: [
      VueRouter({
        dts: resolve('src/renderer/src/typed-router.d.ts'),
        routesFolder: resolve('src/renderer/src/pages'),
      }),

      Vue(),

      AutoImport({
        dts: resolve('src/renderer/src/auto-imports.d.ts'),
        imports: ['vue', 'pinia', 'vue-router', '@vueuse/core'],
        resolvers: [],
      }),

      VueComponents({
        dts: resolve('src/renderer/src/components.d.ts'),
        dirs: [resolve('src/renderer/src/components')],
        resolvers: [],
      }),

      UnoCSS(),
    ],
  },

  main: {
    plugins: [externalizeDepsPlugin()],
  },

  preload: {
    plugins: [externalizeDepsPlugin()],
  },
})
