import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

export type IRoute = RouteRecordRaw & {
  meta: {
    isMenu?: boolean;
    permissionCode: string;
    icon?: string;
    title: string;
  };
  children?: IRoute[];
};
const ListContainer = () => import('~/layout/BodyContainer.vue');
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
  {
    path: '/system',
    component: ListContainer,
    redirect: '/system/role',
    meta: {
      isMenu: true,
      permissionCode: 'sys',
      icon: 'Avatar',
      title: '系统管理',
    },
    children: [
      {
        path: '/system/role',
        component: () => import('~/views/System/Role/List.vue'),
        meta: {
          isMenu: true,
          permissionCode: 'sys:role:list',
          title: '角色管理',
        },
      },
      {
        path: '/system/menu',
        component: () => import('~/views/System/Menu/List.vue'),
        meta: {
          isMenu: true,
          permissionCode: 'sys:menu:list',
          title: '菜单管理',
        },
      },
      {
        path: '/system/account',
        component: () => import('~/views/System/Account/List.vue'),
        meta: {
          isMenu: true,
          permissionCode: 'sys:account:list',
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
      children: dynamicRoutes,
    },
    {
      path: '/login',
      component: () => import('~/views/Login.vue'),
    },
  ],
});

export default router;
