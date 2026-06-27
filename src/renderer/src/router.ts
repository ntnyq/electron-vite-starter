import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

export const router = createRouter({
  strict: true,
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})
