import { key_credentials_auth } from '@/constants/localstorage.keys';
import { InterceptorDefaultType } from './types/Interceptors.type';

function redirectWhenIsNotAuthenticated({
  from,
  next,
  to,
}: InterceptorDefaultType) {
  const isAuthenticated = !!localStorage?.getItem(key_credentials_auth);

  if (to.meta.requiredAuth && !isAuthenticated || (to.path === '/' && !isAuthenticated)) {
    return next('/login');
  }
  if (to.path === '/login' && isAuthenticated) {
    return next('/');
  }

  if (isAuthenticated && to.path === '/') {
    next({
      path: '/transacations',
    });
  }

  next();
}

function getMetaDataTitleNavigation({
  from,
  to,
}: Omit<InterceptorDefaultType, 'next'>) {
  const defaultTitle = 'Fincashly';
  document.title = (to.meta?.title as unknown as string) ?? defaultTitle;
}

export default {
  redirectWhenIsNotAuthenticated,
  getMetaDataTitleNavigation
};
