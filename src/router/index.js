import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import FentiBotPage from "@/views/FentiBotPage.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/FentiBot",
    name: "FentiBotPage",
    component: FentiBotPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router, routes };
