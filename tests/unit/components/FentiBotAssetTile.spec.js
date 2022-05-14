import AssetTileComponent from "@/components/fentiPageComponents/AssetTileComponent.vue";
import { shallowMount } from "@vue/test-utils";
const MOCK_ASSET_TITLE = "Polkadot";
const MOCK_ASSET_DATA = [
  { time: 1641945600000, "sellOrBuy?": "buy", price: 27.44 },
  { time: 1642636800000, "sellOrBuy?": "sell", price: 24.1 },
];

const shallowMountAssetTileComponent = (props) =>
  shallowMount(AssetTileComponent, {
    propsData: props || {
      assetTitle: MOCK_ASSET_TITLE,
    },
  });

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        status: 200,
        success: true,
        data: MOCK_ASSET_DATA,
      }),
    catch: "error",
  })
);

describe("FentiBotAssetTile (child component) - FentiBotAssetTile.vue", function () {
  it("should receive asset titles from the parent component ", () => {
    const component = shallowMountAssetTileComponent();
    expect(component.props().assetTitle).toBe(MOCK_ASSET_TITLE);
  });

  it("it should store a list of asset data fetched from the database", async () => {
    const component = shallowMountAssetTileComponent();
    await component.vm.getAssetData();
    expect(component.vm.$data.assetData).toEqual(MOCK_ASSET_DATA);
  });
});
