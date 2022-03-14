<template>
  <TheMasthead :siteTitle="siteTitle"></TheMasthead>
  <BannerComponent :bannerTitle="siteTitle"></BannerComponent>
</template>
<script>
import TheMasthead from "./components/TheMastHead.vue";
import BannerComponent from "./components/BannerComponent.vue";

export default {
  name: "App",
  components: {
    TheMasthead,
    BannerComponent,
  },
  data() {
    return {
      siteTitle: "Thicc Dough Crypto",
    };
  },
};
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
