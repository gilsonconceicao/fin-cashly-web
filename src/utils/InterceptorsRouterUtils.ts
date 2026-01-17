import { InterceptorDefaultType } from './types/Interceptors.type';

function retryToDefefaultRoute({ from, next, to }: InterceptorDefaultType) {
  if (to.path === '/') {
    next({
      path: '/transacations',
    });
  }
}

function getMetaDataTitleNavigation({ from, to }: Omit<InterceptorDefaultType, "next">) {
  const defaultTitle = 'Fincashly';
  document.title = (to.meta?.title as unknown as string) ?? defaultTitle;
}

function redirectWhenIsNotAuthenticated({ from, next, to }: InterceptorDefaultType) {
  if (to.meta.requiredAuth ) {
 
  }
  next();
}

export default {
  getMetaDataTitleNavigation,
  retryToDefefaultRoute,
  redirectWhenIsNotAuthenticated
};
