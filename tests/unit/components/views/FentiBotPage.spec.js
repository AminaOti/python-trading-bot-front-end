import FentiBotPage from "@/views/FentiBotPage.vue";
import childHeaderComponent from "@/components/TheMastHead.vue";
import childBannerComponent from "@/components/bannerComponent/BannerComponent.vue";
import { shallowMount } from "@vue/test-utils";

describe("FentiBotPage.vue", function () {
  it("should contain a header", () => {
    const component = shallowMount(FentiBotPage);
    expect(component.findComponent(childHeaderComponent).exists()).toBe(true);
  });

  it("should contain a banner", () => {
    const component = shallowMount(FentiBotPage);
    expect(component.findComponent(childBannerComponent).exists()).toBe(true);
  });
});
