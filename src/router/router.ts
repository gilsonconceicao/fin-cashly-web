import { createRouter, createWebHistory } from 'vue-router';
import type { RouterTypeProps } from './router.type';
import BaseView from '@/pages/BaseView.vue';
import InterceptorsRouterUtils from '@/utils/InterceptorsRouterUtils';
import { CalendarSearch, ClipboardList, Goal, Wallet } from 'lucide-vue-next';
import Login from '@/pages/Login/Login.vue';

const routes = [
  {
    meta: {
      title: 'Login',
      showInMenu: false
    },
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    meta: {
      title: 'Transações',
      icon: CalendarSearch,
    },
    path: '/transacations',
    name: 'transacations',
    component: BaseView,
  },
  {
    meta: {
      title: 'Contas bancárias',
      icon: Wallet,
    },
    path: '/accounts',
    name: 'accounts',
    component: BaseView,
  },
  {
    meta: {
      title: 'Metas',
      icon: Goal,
    },
    path: '/goals',
    name: 'goals',
    component: BaseView,
  },
  {
    meta: {
      title: 'Categorias',
      icon: ClipboardList,
    },
    path: '/categories',
    name: 'categories',
    component: BaseView,
  },
].map((route) => ({...route, meta: {...route.meta, requiredAuth: route.name != 'login'}})) as RouterTypeProps[];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach((to, from, next) => {
  InterceptorsRouterUtils.redirectWhenIsNotAuthenticated({ to, from, next });
  InterceptorsRouterUtils.getMetaDataTitleNavigation({ to, from });
  next();
});
