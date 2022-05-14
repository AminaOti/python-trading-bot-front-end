<template>
  <div>
    <p>{{ this.assetTitles }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      assetTitles: "",
    };
  },
  methods: {
    async getAssetTitles() {
      const fentAssetURL =
        process.env.VUE_APP_API_URL_FOR_FETCH_FENTI_ASSET_TITLES;
      const response = await fetch(fentAssetURL).catch("error");
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
