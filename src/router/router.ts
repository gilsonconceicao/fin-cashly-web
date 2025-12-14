import { createMemoryHistory, createRouter } from "vue-router";
import type { RouterTypeProps } from "./router.type";
import AboutView from "@/pages/AboutView.vue";

const routes = [
    { path: "/about", component:AboutView }
] as RouterTypeProps[];

export const router = createRouter({
  history: createMemoryHistory(),
  routes
});
