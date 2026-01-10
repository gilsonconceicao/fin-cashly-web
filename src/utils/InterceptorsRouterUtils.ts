import {
  NavigationGuardNext,
  RouteLocationNormalizedGeneric,
  RouteLocationNormalizedLoadedGeneric,
} from 'vue-router';

function retryToDefefaultRoute(
  to: RouteLocationNormalizedGeneric,
  from: RouteLocationNormalizedLoadedGeneric, 
  next: NavigationGuardNext
) {
  if (to.path === '/') {
    next({
      path: '/transacations'
    })
  } 
}

function getMetaDataTitleNavigation(
  to: RouteLocationNormalizedGeneric,
  from: RouteLocationNormalizedLoadedGeneric
) {
  const defaultTitle = 'Fincashly';
  document.title = (to.meta?.title as unknown as string) ?? defaultTitle;
}

export default {
  getMetaDataTitleNavigation,
  retryToDefefaultRoute
};
