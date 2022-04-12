import { createRouter, createWebHistory } from 'vue-router';

import type { IRoute } from './router.d';

import { logRoutes } from './Log';
import { systemRoutes } from './System';
// 根据后端返回的权限码匹配的路由
export const dynamicRoutes: IRoute[] = [
  {
    path: '/home',
    component: () => import('~/views/Home.vue'),
    meta: {
      isMenu: true,
      permissionCode: 'home',
      icon: 'HomeFilled',
      title: '首页',
    },
  },
  ...systemRoutes,
  ...logRoutes,
];
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('~/layout/Layout.vue'),
      redirect: '/home',
      children: dynamicRoutes,
    },
    {
      path: '/login',
      component: () => import('~/views/Login.vue'),
    },
  ],
});

export default router;
