import botTileComponent from "@/components/bodyComponents/BotTileComponent.vue";
import { shallowMount } from "@vue/test-utils";
const MOCK_BOT_NAME = "Mock bot name";
const MOCK_BOT_LOGO = "images/testImage.jpeg";
const FENTI_BOT_NAME = "Fenti";
const FENTI_BOT_ROUTE = "/FentiBot";

const mockRouter = {
  push: jest.fn(),
};

const shallowMountcomponentBotTileComponent = (props) =>
  shallowMount(botTileComponent, {
    propsData: props || {
      botName: MOCK_BOT_NAME,
      botLogo: MOCK_BOT_LOGO,
    },
    global: {
      mocks: {
        $router: mockRouter,
      },
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

  describe("should DISPLAY the bot logo image from the parent component", () => {
    it("should display a bot name from the parent component (props)", () => {
      const component = shallowMountcomponentBotTileComponent();
      expect(component.html()).toContain(MOCK_BOT_NAME);
    });
    // it("should display a logo image from the parent component (props)", () => {
    //   const component = shallowMountcomponentBotTileComponent();
    //   expect(component.html()).toContain(MOCK_BOT_LOGO);
    // });
  });

  describe("should be able to naviate to the correct bot page when a tile is clicked", () => {
    it("should navigate to the FentiBotPage when the fenti bot tile is clicked", async () => {
      const props = {
        botName: FENTI_BOT_NAME,
        botLogo: MOCK_BOT_LOGO,
      };
      const component = shallowMountcomponentBotTileComponent(props);
      await component.find("[data-test=bot-tile]").trigger("click");
      expect(mockRouter.push).toHaveBeenCalledWith(FENTI_BOT_ROUTE);
    });
  });

  it("should match snapshot", () => {
    const component = shallowMountcomponentBotTileComponent();
    expect(component.element).toMatchSnapshot();
  });
});
