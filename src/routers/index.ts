import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const ListContainer = () => import('~/layout/BodyContainer.vue');
// 主要路由
export const routes: RouteRecordRaw[] = [
  {
    path: '/home',
    component: () => import('~/views/Home.vue'),
    meta: {
      isMenu: true,
      icon: 'HomeFilled',
      title: '首页',
    },
  },
  {
    path: '/system',
    component: ListContainer,
    redirect: '/system/role',
    meta: {
      isMenu: true,
      icon: 'Avatar',
      title: '系统管理',
    },
    children: [
      {
        path: '/system/role',
        component: () => import('~/views/System/RoleList.vue'),
        meta: {
          isMenu: true,
          title: '角色管理',
        },
      },
      {
        path: '/system/permission',
        component: () => import('~/views/System/Permission.vue'),
        meta: {
          isMenu: true,
          title: '权限管理',
        },
      },
      {
        path: '/system/user',
        component: () => import('~/views/System/UserList.vue'),
        meta: {
          isMenu: true,
          title: '用户管理',
        },
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('~/layout/Layout.vue'),
      redirect: '/home',
      meta: {
        isMenu: true,
        title: '首页',
      },
      children: routes,
    },
    {
      path: '/login',
      component: () => import('~/views/Login.vue'),
    },
  ],
});

export default router;
