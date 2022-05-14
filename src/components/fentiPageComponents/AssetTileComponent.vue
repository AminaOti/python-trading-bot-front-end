<template>
  <div test-id="fenti-bot-tile"></div>
  <div>
    <h1>{{ assetTitle }}</h1>
    <p>{{ assetData }}</p>
    <p>---</p>
  </div>
</template>

<script>
export default {
  props: {
    assetTitle: String,
  },
  data() {
    return {
      assetData: [],
    };
  },
  computed: {},
  methods: {
    async getAssetData() {
      const url = `${process.env.VUE_APP_API_URL_FOR_FETCH_FENTI_ASSET_DATA}/${this.assetTitle}`;
      const response = await fetch(url).catch("error");
      console.log("hello");
      console.log(response);
      const responseToJson = await response.json();
      this.assetData = responseToJson.data;
    },
  },
  beforeMount() {
    this.getAssetData();
  },
};
</script>

<style lang="scss" scoped></style>
