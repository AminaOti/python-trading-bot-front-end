import { shallowMount } from "@vue/test-utils";
import bannerTitleComponent from "@/components/bannerComponent/BannerTitle.vue";
const MOCK_SITE_TITLE = "Mock Site Title";
const MOCK_BANNER_ICON = "images/testImage.jpeg";

const shallowMountcomponentBannerTitle = (props) =>
  shallowMount(bannerTitleComponent, {
    propsData: props || {
      bannerTitle: MOCK_SITE_TITLE,
      bannerIcon: MOCK_BANNER_ICON,
    },
  });

describe("Banner title (child component) - BannerTitle.vue", () => {
  describe("should RECEIVE the title and logo image from props", () => {
    it("should receive the title passed through the props", () => {
      const component = shallowMountcomponentBannerTitle();
      expect(component.props().bannerTitle).toBe(MOCK_SITE_TITLE);
    });

    it("should receive the logo image passed through the props", () => {
      const component = shallowMountcomponentBannerTitle();
      expect(component.props().bannerIcon).toBe(MOCK_BANNER_ICON);
    });
  });

  describe("should DISPLAY the title and image passed through the props", () => {
    it("should display the title passed through props", () => {
      const component = shallowMountcomponentBannerTitle();
      expect(component.html()).toContain(MOCK_SITE_TITLE);
    });

    it("should display the logo image passed through props", async () => {
      const component = shallowMountcomponentBannerTitle();
      expect(component.html()).toContain("src");
    });
  });

  it("should match snapshot", () => {
    const component = shallowMountcomponentBannerTitle();
    expect(component.element).toMatchSnapshot();
  });
});
