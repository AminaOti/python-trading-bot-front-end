import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
import App from "@/App";
import { routes } from "@/router/index.js";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const mountApp = mount(App, {
  global: {
    plugins: [router],
  },
});

test("router should navigate to the home page", async () => {
  router.push("/");
  await router.isReady();
  expect(mountApp.html()).toContain("bodyComponentHomePage-container");
});
