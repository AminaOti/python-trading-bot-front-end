import { mount } from "@vue/test-utils";
import App from "@/App.vue";

describe("The main page - App.vue", () => {
  it("should contain a header", () => {
    const wrapper = mount(App);
    const headerComponent = wrapper.findComponent({ name: "TheMasthead" });
    expect(headerComponent.exists()).toBe(true);
  });
});
