import { shallowMount } from "@vue/test-utils";
import TheMastHead from "@/components/TheMastHead.vue";

describe("The header - TheMastHead.vue", () => {
  it("should render the title passed through the props", () => {
    const siteTitle = "Mock Site Title";
    const wrapper = shallowMount(TheMastHead, {
      props: { siteTitle },
    });
    expect(wrapper.text()).toMatch(siteTitle);
  });
  it("should match snapshot", () => {
    const siteTitle = "Mock Site Title";
    const wrapper = shallowMount(TheMastHead, {
      props: { siteTitle },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
