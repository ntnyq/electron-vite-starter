/**
 * @file Electron Vite Configuration
 * @see {@link https://electron-vite.org/config}
 */

import process from 'node:process'
import Vue from '@vitejs/plugin-vue'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import VueComponents from 'unplugin-vue-components/vite'
import VueRouter from 'unplugin-vue-router/vite'
import pkg from './package.json'
import { resolve } from './scripts/utils'

const define = {
  __APP_ID__: JSON.stringify('com.ntnyq.dev-helper'),
  __APP_VERSION__: JSON.stringify(pkg.version),
  __IS_MAC__: JSON.stringify(process.platform === 'darwin'),
}

export default defineConfig({
  main: {
    define,
    plugins: [externalizeDepsPlugin()],
  },

  preload: {
    plugins: [externalizeDepsPlugin()],
  },

  renderer: {
    define,
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
        dirs: [resolve('src/renderer/src/components')],
        dts: resolve('src/renderer/src/components.d.ts'),
        resolvers: [],
      }),

      UnoCSS(),
    ],

    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
      },
    },
  },
})
