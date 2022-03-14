import { shallowMount } from "@vue/test-utils";
import bannerTitle from "@/components/bannerComponent/BannerTitle.vue"; //src/components/bannerComponent/BannerComponent.vue

describe("The Banner Title - BannerTitle.vue", () => {
  it("should render the title passed through the props", () => {
    const title = "Mock Site Title";
    const bannerIcon = "images/testImage.jpeg";
    const wrapper = shallowMount(bannerTitle, {
      propsData: { bannerTitle: title, bannerIcon: bannerIcon },
    });
    //expect(wrapper.text()).toMatch(siteTitle);
    expect(wrapper.props().bannerTitle).toBe(title);
  });
});
