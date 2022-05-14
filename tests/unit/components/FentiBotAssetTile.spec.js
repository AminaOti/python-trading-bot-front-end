import AssetTileComponent from "@/components/fentiPageComponents/AssetTileComponent.vue";
import { shallowMount } from "@vue/test-utils";
const MOCK_ASSET_TITLE = "Polkadot";

const shallowMountAssetTileComponent = (props) =>
  shallowMount(AssetTileComponent, {
    propsData: props || {
      assetTitle: MOCK_ASSET_TITLE,
    },
  });

//FentiPageBodyComponent (child component) - FentiPageBodyComponent.vue
describe("FentiBotAssetTile (child component) - FentiBotAssetTile.vue", function () {
  it("should receive asset titles from the parent component ", () => {
    const component = shallowMountAssetTileComponent();
    expect(component.props().assetTitle).toBe(MOCK_ASSET_TITLE);
  });
});
