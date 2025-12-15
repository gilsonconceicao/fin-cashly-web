import {
  RouteLocationNormalizedGeneric,
  RouteLocationNormalizedLoadedGeneric,
} from 'vue-router';

function getMetaDataTitleNavigation(
  to: RouteLocationNormalizedGeneric,
  from: RouteLocationNormalizedLoadedGeneric
) {
  const defaultTitle = 'Fincashly';
  document.title = (to.meta?.title as unknown as string) ?? defaultTitle;
}

export default {
  getMetaDataTitleNavigation,
};
