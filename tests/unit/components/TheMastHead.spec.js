import { shallowMount } from "@vue/test-utils";
import TheMastHead from "@/components/TheMastHead.vue";

const MOCK_SITE_TITLE = "Mock Site Title";

const shallowMountWrapperTheMastHead = (props) =>
  shallowMount(TheMastHead, {
    propsData: props || {
      siteTitle: MOCK_SITE_TITLE,
    },
  });

describe("Header (child component) - TheMastHead.vue", () => {
  describe("should RECEIVE the site title from a parent component", () => {
    it("should render the title passed from the parent component (props)", () => {
      const wrapper = shallowMountWrapperTheMastHead();
      expect(wrapper.props().siteTitle).toBe(MOCK_SITE_TITLE);
    });

    it("should display the site title", () => {
      const wrapper = shallowMountWrapperTheMastHead();
      expect(wrapper.html()).toContain(MOCK_SITE_TITLE);
    });
  });

  it("should match snapshot", () => {
    const siteTitle = "Mock Site Title";
    const wrapper = shallowMount(TheMastHead, {
      props: { siteTitle },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
