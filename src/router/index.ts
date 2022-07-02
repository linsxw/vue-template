import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'

// 配置路由信息
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/test.vue'),
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router

export const setupRouter = (app: App) => {
  app.use(router)
}
