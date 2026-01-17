import 'vue-router'

export {}

declare module 'vue-router' {
  interface RouteMeta {
    title: string;
    icon: FunctionalComponent<LucideProps, {}, any, {}>; 
    requiredAuth: boolean = false;
    showInMenu: boolean
  }
}