import { shallowMount } from "@vue/test-utils";
import bannerTitleComponent from "@/components/bannerComponent/BannerTitle.vue";
const MOCK_SITE_TITLE = "Mock Site Title";
const MOCK_BANNER_ICON = "images/testImage.jpeg";

const shallowMountWrapperBannerTitle = (props) =>
  shallowMount(bannerTitleComponent, {
    propsData: props || {
      bannerTitle: MOCK_SITE_TITLE,
      bannerIcon: MOCK_BANNER_ICON,
    },
  });

describe("The Banner Title - BannerTitle.vue", () => {
  describe("should receive the title and logo image from props", () => {
    it("should RECEIVE the title passed through the props", () => {
      const wrapper = shallowMountWrapperBannerTitle();
      expect(wrapper.props().bannerTitle).toBe(MOCK_SITE_TITLE);
    });

    it("should receive the logo image passed through the props", () => {
      const wrapper = shallowMountWrapperBannerTitle();
      expect(wrapper.props().bannerIcon).toBe(MOCK_BANNER_ICON);
    });
  });

  describe("should DISPLAY the title and image passed through the props", () => {
    it("should display the title passed through props", () => {
      const wrapper = shallowMountWrapperBannerTitle();
      expect(wrapper.html()).toContain(MOCK_SITE_TITLE);
    });

    it("should display the logo image passed through props", async () => {
      const wrapper = shallowMountWrapperBannerTitle();
      expect(wrapper.html()).toContain("src");
    });
  });

  it("should match snapshot", () => {
    const wrapper = shallowMountWrapperBannerTitle();
    expect(wrapper.element).toMatchSnapshot();
  });
});
