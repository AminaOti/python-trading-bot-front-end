import { mount } from "@vue/test-utils";
import FentiBotBodyComponent from "@/components/fentiPageComponents/FentiPageBodyComponent.vue";

const assetTitles = ["Solana", "Bitcoin", "BNB"];
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        status: 200,
        success: true,
        data: assetTitles,
      }),
    catch: "error",
  })
);

describe("FentiPageBodyComponent (child component) - FentiPageBodyComponent.vue", () => {
  it("should store a list of asset titles fetched from a database", async () => {
    const wrapper = mount(FentiBotBodyComponent);
    await wrapper.vm.getAssetTitles();
    expect(wrapper.vm.$data.assetTitles).toEqual(assetTitles);
  });

  //it("should render as many asset tiles as there are assets")
  //should pass the asset title to the asset titles
  it("should render as many asset tiles as there are asset", async () => {
    const component = mount(FentiBotBodyComponent);
    await component.vm.getAssetTitles();

    const renderedHtml = component.html();
    const sanitisedHtml = renderedHtml.match(/test-id="fenti-bot-tile"/g);

    expect(sanitisedHtml.length).toBe(assetTitles.length);
  });

  it.todo("should pass the asset title to the asset titles");
});

//it should store a list of asset titles fetched from a database
//it should store a list of asset data fetched from the database

//     it('should store a list of asset titles fetched from a database', asnyc(() => {)
//         const component = mount(FentiBotBodyComponent);
//         await component.vm.fetchAssetTitles();
//         expect(component.vm.data.assetTitle).toEqual("fake returned data");

// });

//  describe('should render the Asset Tile Components and send them the asset title and data which has been fetched from the database', () => { second })
//should render as many asset tiles as there are assets

//});
