import { key_credentials_auth } from '@/constants/localstorage.keys';
import { InterceptorDefaultType } from './types/Interceptors.type';

function redirectWhenIsNotAuthenticated({
  from,
  next,
  to,
}: InterceptorDefaultType) {
  const isAuthenticated = !!localStorage?.getItem(key_credentials_auth);
  const path = to.path;

  if (to.meta.requiredAuth && !isAuthenticated || (path === '/' && !isAuthenticated)) {
    return next('/login');
  }
  
  if (path === '/login' && isAuthenticated) {
    return next('/');
  }

  if (isAuthenticated && path === '/') {
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
