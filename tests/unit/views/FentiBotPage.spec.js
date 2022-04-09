import { shallowMount } from "@vue/test-utils";
import fentiBotPage from "@/views/FentiBotPage.vue";

const shallowMountcomponentFentiBotPage = (props) =>
  shallowMount(fentiBotPage, {
    propsData: props || {},
  });

describe("Fenti Bot Page - FentiBotPage.vue", () => {
  it("should exsit", async () => {
    const fentiBotPage = shallowMountcomponentFentiBotPage();
    expect(fentiBotPage).toBeTruthy();
  });
});
