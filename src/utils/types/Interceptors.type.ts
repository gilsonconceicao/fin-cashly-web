import { NavigationGuardNext, RouteLocationNormalizedGeneric, RouteLocationNormalizedLoadedGeneric } from "vue-router"

export type InterceptorDefaultType = {
  to: RouteLocationNormalizedGeneric,
  from: RouteLocationNormalizedLoadedGeneric,
  next: NavigationGuardNext
}