import { shallowMount } from "@vue/test-utils";
import bodyComponentHomePage from "@/components/bodyComponents/BodyComponentHomePage.vue";

const shallowMountWrapperBodyComponentHomePage = () =>
  shallowMount(bodyComponentHomePage, {});

describe("Body-hompage - BodyComponentHomePage.vue", () => {
  describe("should display the title: Thicc Dough Crypto Bots", () => {
    it("should display the title: Thicc Dough Crypto Bots", () => {
      const wrapper = shallowMountWrapperBodyComponentHomePage();
      const title = "Thicc Dough Crypto Bots";
      expect(wrapper.html()).toContain(title);
    });
  });

  //   // describe("should have a background colour = to the colour received from the parent component", () => {
  //   //     it("should should have a background colour = to the colour received from the parent component", () => {
  //   //         const wrapper = shallowMountWrapperBodyComponentHomePage();
  //   //         console.log(wrapper.element.style._importants)
  //   //         expect(wrapper.element.style.backgroundColour.bodyComponentHomePage_Container).toBe(BACKGROUND_COLOUR);
  //   //     });
  //   // })
});
