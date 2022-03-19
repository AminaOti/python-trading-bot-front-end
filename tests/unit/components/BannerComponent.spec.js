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

describe("The Banner Component - BannerComponent.vue", () => {
  it("should receive the banner title from props", () => {
    const wrapper = shallowMountBannerComponent();
    expect(wrapper.props().bannerTitle).toBe(MOCK_SITE_TITLE);
  });
  it("should receive banner icon logo from props", () => {
    const wrapper = shallowMountBannerComponent();
    expect(wrapper.props().bannerIcon).toBe(MOCK_BANNER_ICON);
  });
  describe("should contain a child component which displays the page title and logo that it received from the props ", () => {
    it("should render the child component", () => {
      const wrapper = shallowMountBannerComponent();
      const childComponent = wrapper.findComponent(bannerTitleComponent);
      // expect(wrapper.html()).toContain('<banner-title-stub' && '</banner-title-stub>')
      expect(childComponent.exists()).toBe(true);
    });
    test("should pass the title to the child component", async () => {
      const wrapper = shallowMountBannerComponent();
      expect(wrapper.vm.$options.propsData.bannerTitle).toBe(MOCK_SITE_TITLE);
    });
    test("should pass the title to the child component", async () => {
      const wrapper = shallowMountBannerComponent();
      expect(wrapper.html()).toContain(
        'bannericon="images/testImage.jpeg"></banner-title-stub>'
      );
    });
  });
});
