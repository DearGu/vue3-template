import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../pages/Home/index.vue'),
  },
  {
    path: '/',
    redirect: '/home',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
