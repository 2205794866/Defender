import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../pages/Home.vue';
import Monitor from '../pages/Monitor.vue';
import Statistics from '../pages/Statistics.vue';
import Settings from '../pages/Settings.vue';


const routes = [
    { path: '/', component: Home },                 // 首页
    { path: '/monitor', component: Monitor },       // 监控
    { path: '/statistics', component: Statistics },     // 统计
    { path: '/settings', component: Settings },     // 设置
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;