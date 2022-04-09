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

describe("Router.js", () => {
  it("should navigate to the home page when / is entered into the search bar", async () => {
    router.push("/");
    await router.isReady();
    expect(mountApp.html()).toContain('test-id="HomePage"');
  });
});
