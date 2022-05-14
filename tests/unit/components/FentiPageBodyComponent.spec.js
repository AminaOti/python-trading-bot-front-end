import { mount } from "@vue/test-utils";
import FentiBotBodyComponent from "@/components/fentiPageComponents/FentiPageBodyComponent.vue";

var mockResponseData;
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        status: 200,
        success: true,
        data: mockResponseData,
      }),
    catch: "error",
  })
);

// it("should fetch list of assets from API", async () => {
//   const wrapper = mount(FentiBotPage);
//   const rate = await wrapper.vm.getAllData();
//   expect(rate).toEqual("fake returned data");
// });

describe("FentiPageBodyComponent (child component) - FentiPageBodyComponent.vue", () => {
  it("should store a list of asset titles fetched from a database", async () => {
    mockResponseData = ["Solana", "Bitcoin", "BNB"];
    const wrapper = await mount(FentiBotBodyComponent);
    await wrapper.vm.getAssetTitles();
    expect(wrapper.vm.$data.assetTitles).toEqual(mockResponseData);
  });
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
