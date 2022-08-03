import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../components/Home/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
    // 重定向 goods
    redirect: "console",
    children: [
      {
        path: "/console",
        name: "console",
        meta: {
          isShow: true,
          title: "前端列表"
        },
        component: () => import('../views/ConsoleView/index.vue'),
      },
      {
        path: "/chart",
        name: "chart",
        meta: {
          isShow: true,
          title: "前端监控报警规则"
        },
        component: () => import('../views/chartView/index.vue'),
      },
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
