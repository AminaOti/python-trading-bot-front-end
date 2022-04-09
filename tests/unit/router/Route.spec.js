import { mount } from "@vue/test-utils";
import { waitFor } from "@testing-library/vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "@/App";
import { routes } from "@/router/index.js";
//import waitForExpect from "wait-for-expect";

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

  it("should navigate to the Fenti Bot page when /FentiBot is entered into the search bar", async () => {
    router.push("/FentiBot");
    await router.isReady();
    await waitFor(() => {
      expect(mountApp.html()).toContain('test-id="FentiBotPage"');
    });
  });
});
