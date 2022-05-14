<template>
  <div v-for="title in assetTitles" v-bind:key="title">
    <AssetTileComponent></AssetTileComponent>
  </div>
</template>

<script>
import AssetTileComponent from "./AssetTileComponent.vue";
export default {
  components: { AssetTileComponent },
  data() {
    return {
      assetTitles: "",
    };
  },
  methods: {
    async getAssetTitles() {
      const fentiAssetURL =
        process.env.VUE_APP_API_URL_FOR_FETCH_FENTI_ASSET_TITLES;
      const response = await fetch(fentiAssetURL).catch("error");
      const responseToJson = await response.json();
      this.assetTitles = responseToJson.data;
      return responseToJson.data;
    },
  },
  mounted() {
    this.getAssetTitles();
  },
};
</script>
