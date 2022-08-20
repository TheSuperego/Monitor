import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";


const routes: Array<RouteRecordRaw> = [
    {
        // 00. 测试页面
        path: "/",
        name: "Root",
        component: () => import('../views/HomePage.vue'),
    },
    {
        // 00. 测试页面
        path: "/echo",
        name: "Echo",
        component: () => import('../components/debug/Echo.vue'),
    },
    {
        // 01. 主页面
        path: "/homepage",
        name: "HomePage",
        component: () => import('../views/HomePage.vue'),
    },
    {
        // 02. 网站详情
        path: "/aboutpage",
        name: "AboutPage",
        component: () => import('../views/AboutPage.vue'),
    },
    {
        // 04. 控制面板
        path: "/console",
        name: "Console",
        component: () => import('../views/console/index.vue'),
    },
    {
        // 04. 图表
        path: "/chart",
        name: "Chart",
        component: () => import('../views/chart/index.vue'),
    },
    {
         // 05. 性能
         path: "/performance",
         name: "Performance",
         component: () => import('../views/performance/index.vue'),
    },
    {
        // 06. 错误
        path: "/error",
        name: "Error",
        component: () => import('../views/error/index.vue'),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;


// const routes: Array<RouteRecordRaw> = [
//     {
//         path: '/',
//         name: 'home',
//         component: Home,
//         // 重定向 goods
//         redirect: "console",
//         children: [
//             {
//                 path: "/console",
//                 name: "console",
//                 meta: {
//                     isShow: true,
//                     title: "前端列表"
//                 },
//                 component: () => import('../views/ConsoleView/index.vue'),
//             },
//             {
//                 path: "/chart",
//                 name: "chart",
//                 meta: {
//                     isShow: true,
//                     title: "前端监控报警规则"
//                 },
//                 component: () => import('../views/chartView/index.vue'),
//             },
//         ]
//     },
// ]
// const router = createRouter({
//     history: createWebHistory(process.env.BASE_URL),
//     routes
// })

