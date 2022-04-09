import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
import App from "@/App";
import { routes } from "@/router/index.js";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

test("router should navigate to the home page", async () => {
  router.push("/");
  await router.isReady();

  const wrapper = mount(App, {
    global: {
      plugins: [router],
    },
  });

  expect(wrapper.html()).toContain("bodyComponentHomePage-container");
});
