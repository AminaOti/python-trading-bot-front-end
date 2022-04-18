import { shallowMount } from "@vue/test-utils";
import homePageBodyComponent from "@/components/homePageComponent/HomePageBodyComponent.vue";
import botTileComponent from "@/components/homePageComponent/BotTileComponent.vue";

const mountcomponentBodyComponentHomePage = () =>
  shallowMount(homePageBodyComponent, {});

describe("Body-hompage (child component)- BodyComponentHomePage.vue", () => {
  describe("should display the title: Thicc Dough Crypto Bots", () => {
    it("should display the title: Thicc Dough Crypto Bots", () => {
      const component = mountcomponentBodyComponentHomePage();
      const title = "Thicc Dough Crypto Bots";
      expect(component.html()).toContain(title);
    });
  });

  describe("should contain the names and logo images of all the bots", () => {
    it("should contain an array of the bots with the both names", () => {
      const component = mountcomponentBodyComponentHomePage();
      const getBotNameFromTheDataInsideTheComponent =
        component.vm.$data.bots[0].botName;
      expect(getBotNameFromTheDataInsideTheComponent).toBe("Fenti");
    });

    it("should contain an array of the bots with the bots logo images", () => {
      const component = mountcomponentBodyComponentHomePage();
      const getBotImageFromTheDataInsideTheComponent =
        component.vm.$data.bots[0].botLogo;
      expect(getBotImageFromTheDataInsideTheComponent).toContain("/");
    });
  });

  describe("should render the Bot Tile Component and send it the bot names and logo images", () => {
    it("should render the Bot Tile Component ", () => {
      const component = mountcomponentBodyComponentHomePage();
      expect(component.findComponent(botTileComponent).exists()).toBe(true);
    });
  });

  //   // describe("should have a background colour = to the colour received from the parent component", () => {
  //   //     it("should should have a background colour = to the colour received from the parent component", () => {
  //   //         const component = mountcomponentBodyComponentHomePage();
  //   //         console.log(component.element.style._importants)
  //   //         expect(component.element.style.backgroundColour.bodyComponentHomePage_Container).toBe(BACKGROUND_COLOUR);
  //   //     });
  //   // })
});
