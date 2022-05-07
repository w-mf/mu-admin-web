import type { IRoute } from './router.d';

const ListContainer = () => import('~/layout/BodyContainer.vue');
export const systemRoutes: IRoute[] = [
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
        path: '/system/account',
        component: () => import('~/views/System/Account/AccountList.vue'),
        meta: {
          isMenu: true,
          permissionCode: 'sys:account:list',
          title: '用户管理',
        },
      },
      {
        path: '/system/role',
        component: () => import('~/views/System/Role/RoleList.vue'),
        meta: {
          isMenu: true,
          permissionCode: 'sys:role:list',
          title: '角色管理',
        },
      },
      {
        path: '/system/menu',
        component: () => import('~/views/System/Menu/MenuList.vue'),
        meta: {
          isMenu: true,
          permissionCode: 'sys:menu:list',
          title: '菜单管理',
        },
      },
    ],
  },
];
