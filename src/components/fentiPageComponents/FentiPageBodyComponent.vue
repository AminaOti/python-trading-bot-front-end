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
      asset: "",
    };
  },
  methods: {
    async getAssetTitles() {
      const response = await fetch("http://localhost:5000/fentiBot/assetList");
      const responseToJson = await response.json();
      this.assetTitles = responseToJson.data;
      return responseToJson.data;
    },
  },
  mounted() {
    this.getAssetTitles();
    this.asset = "hello";
  },
};
</script>
