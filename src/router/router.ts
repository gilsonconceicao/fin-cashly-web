import { createMemoryHistory, createRouter } from 'vue-router';
import type { RouterTypeProps } from './router.type';
import AboutView from '@/pages/AboutView.vue';
import InterceptorsRouterUtils from '@/utils/InterceptorsRouterUtils';

const routes = [
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: {
      title: 'Sobre',
    },
  },
] as RouterTypeProps[];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  InterceptorsRouterUtils.getMetaDataTitleNavigation(to, from);
  next();
});
