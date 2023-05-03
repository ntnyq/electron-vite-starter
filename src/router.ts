import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home.vue'),
    meta: {},
  },
  {
    path: '/browser/:url',
    name: 'Browser',
    component: () => import('@/views/browser.vue'),
    meta: {},
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
