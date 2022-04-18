import FentiBotPage from "@/views/FentiBotPage.vue";
import childHeaderComponent from "@/components/TheMastHead.vue";
import { shallowMount } from "@vue/test-utils";

describe("FentiBotPage.vue", function () {
  it("should contain a header", () => {
    const component = shallowMount(FentiBotPage);
    expect(component.findComponent(childHeaderComponent).exists()).toBe(true);
  });
});
