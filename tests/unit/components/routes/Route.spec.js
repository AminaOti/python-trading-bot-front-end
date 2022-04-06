import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "@/routes/router"; // This import should point to your routes file declared above
import App from "@App";

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

test("router should navigate to the home page", async () => {
  router.push("/");
  await router.isReady();

  const wrapper = mount(App, {
    global: {
      plugins: [router],
    },
  });
  expect(wrapper.html()).toContain(
    "<BodyComponentHomePage></BodyComponentHomePage>"
  );
});
