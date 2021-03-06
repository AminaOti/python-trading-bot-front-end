import bannerComponent from "@/components/bannerComponent/BannerComponent.vue";
import bannerTitleComponent from "@/components/bannerComponent/BannerTitle.vue";
import { shallowMount } from "@vue/test-utils";
const MOCK_SITE_TITLE = "Mock Site Title";
const MOCK_BANNER_ICON = "images/testImage.jpeg";

const shallowMountBannerComponent = (props) =>
  shallowMount(bannerComponent, {
    propsData: props || {
      bannerTitle: MOCK_SITE_TITLE,
      bannerIcon: MOCK_BANNER_ICON,
    },
  });

describe("Banner (child component) - BannerComponent.vue", () => {
  describe("should receive the title and logo image from a parent component", () => {
    it("should receive a banner title from the parent component (props)", () => {
      const component = shallowMountBannerComponent();
      expect(component.props().bannerTitle).toBe(MOCK_SITE_TITLE);
    });
    it("should receive a logo image from the parent component (props)", () => {
      const component = shallowMountBannerComponent();
      expect(component.props().bannerIcon).toBe(MOCK_BANNER_ICON);
    });
  });

  describe("should render the Banner title component and send it the title and logo image", () => {
    it("should render the Banner title component", () => {
      const component = shallowMountBannerComponent();
      const childComponent = component.findComponent(bannerTitleComponent);
      // expect(component.html()).toContain('<banner-title-stub' && '</banner-title-stub>')
      expect(childComponent.exists()).toBe(true);
    });
    test("should pass the title to the child component", async () => {
      const component = shallowMountBannerComponent();
      expect(component.vm.$options.propsData.bannerTitle).toBe(MOCK_SITE_TITLE);
    });
    test("should pass the title to the child component", async () => {
      const component = shallowMountBannerComponent();
      expect(component.html()).toContain(
        'bannericon="images/testImage.jpeg"></banner-title-stub>'
      );
    });
  });
});
