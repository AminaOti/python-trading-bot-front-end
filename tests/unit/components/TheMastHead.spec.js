import { shallowMount } from "@vue/test-utils";
import TheMastHead from "@/components/TheMastHead.vue";

const MOCK_SITE_TITLE = "Mock Site Title";

const shallowMountcomponentTheMastHead = (props) =>
  shallowMount(TheMastHead, {
    propsData: props || {
      siteTitle: MOCK_SITE_TITLE,
    },
  });

describe("Header (child component) - TheMastHead.vue", () => {
  describe("should RECEIVE the site title from a parent component", () => {
    it("should render the title passed from the parent component (props)", () => {
      const component = shallowMountcomponentTheMastHead();
      expect(component.props().siteTitle).toBe(MOCK_SITE_TITLE);
    });
  });

  describe("should DISPLAY the site title", () => {
    it("should DISPLAY the site title", () => {
      const component = shallowMountcomponentTheMastHead();
      expect(component.html()).toContain(MOCK_SITE_TITLE);
    });
  });

  it("should match snapshot", () => {
    const siteTitle = "Mock Site Title";
    const component = shallowMount(TheMastHead, {
      props: { siteTitle },
    });
    expect(component.element).toMatchSnapshot();
  });
});
