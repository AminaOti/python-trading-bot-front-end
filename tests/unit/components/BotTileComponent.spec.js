import botTileComponent from "@/components/bodyComponents/BotTileComponent.vue";
import { shallowMount } from "@vue/test-utils";
const MOCK_BOT_NAME = "Mock bot name";
const MOCK_BOT_LOGO = "images/testImage.jpeg";

const shallowMountcomponentBotTileComponent = (props) =>
  shallowMount(botTileComponent, {
    propsData: props || {
      botName: MOCK_BOT_NAME,
      botLogo: MOCK_BOT_LOGO,
    },
  });

describe("Bot tile (child component) - BotTileComponent.vue", () => {
  describe("should receive the title and logo image from a parent component", () => {
    it("should receive a bot name from the parent component (props)", () => {
      const component = shallowMountcomponentBotTileComponent();
      expect(component.props().botName).toBe(MOCK_BOT_NAME);
    });
    it("should receive a logo image from the parent component (props)", () => {
      const component = shallowMountcomponentBotTileComponent();
      expect(component.props().botLogo).toBe(MOCK_BOT_LOGO);
    });
  });
});
