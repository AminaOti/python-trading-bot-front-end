import { shallowMount } from "@vue/test-utils";
import bodyComponentHomePage from "@/components/bodyComponents/BodyComponentHomePage.vue";
const BACKGROUND_COLOUR = "#000000";

const shallowMountWrapperBodyComponentHomePage = (props) =>
  shallowMount(bodyComponentHomePage, {
    propsData: props || {
      backgroundColour: "#000000",
    },
  });

describe("Body-hompage - BodyComponentHomePage.vue", () => {
  describe("should receive a background colour from the parent component", () => {
    it("should receive a background colour from the parent component", () => {
      const wrapper = shallowMountWrapperBodyComponentHomePage();
      expect(wrapper.props().backgroundColour).toBe(BACKGROUND_COLOUR);
    });
  });

  // describe("should have a background colour = to the colour received from the parent component", () => {
  //     it("should should have a background colour = to the colour received from the parent component", () => {
  //         const wrapper = shallowMountWrapperBodyComponentHomePage();
  //         console.log(wrapper.element.style._importants)
  //         expect(wrapper.element.style.backgroundColour.bodyComponentHomePage_Container).toBe(BACKGROUND_COLOUR);
  //     });
  // })
});
