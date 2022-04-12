import type { IRoute } from './router.d';

const ListContainer = () => import('~/layout/BodyContainer.vue');
export const logRoutes: IRoute[] = [
  {
    path: '/log',
    component: ListContainer,
    redirect: '/log/login-log',
    meta: {
      isMenu: true,
      permissionCode: 'log',
      icon: 'Tickets',
      title: '日志管理',
    },
    children: [
      {
        path: '/log/login-log',
        component: () => import('~/views/Log/LoginLog/List.vue'),
        meta: {
          isMenu: true,
          permissionCode: 'log:login:list',
          title: '登录日志',
        },
      },
    ],
  },
];
