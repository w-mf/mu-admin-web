import { createRouter, createWebHistory } from 'vue-router';
import nProgress from '~/utils/nprogress';
import { useNavTabsStore } from '~/stores/navTabs';
import type { IRoute } from './router.d';
import { logRoutes } from './Log';
import { systemRoutes } from './System';

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
      children: [
        ...dynamicRoutes,
        {
          path: '/error/:code',
          component: () => import('~/views/Error.vue'),
          meta: {
            isMenu: false,
            title: '异常',
          },
        },
        { path: '/:pathMatch(.*)', component: ListContainer, redirect: '/error/404' },
      ],
    },
    {
      path: '/login',
      component: () => import('~/views/Login.vue'),
    },
  ],
});
router.beforeEach((to) => {
  const navTabsStore = useNavTabsStore();
  navTabsStore.onAddNavTab({ text: (to.meta.title as string) || '', path: to.path });
  navTabsStore.setActiveTab(to.path);
  nProgress.start();
});
router.afterEach(() => {
  nProgress.done();
});

export default router;
