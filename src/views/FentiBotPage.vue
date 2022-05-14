<template>
  <span test-id="FentiBotPage"></span>
  <TheMasthead :siteTitle="siteTitle"></TheMasthead>
  <BannerComponent
    :bannerTitle="pageTitle"
    :bannerIcon="bannerIcon"
  ></BannerComponent>
  <FentiBotBodyComponent></FentiBotBodyComponent>
</template>
<script>
import TheMasthead from "../components/TheMastHead.vue";
import BannerComponent from "../components/bannerComponent/BannerComponent.vue";
import FentiBotBodyComponent from "../components/fentiPageComponents/FentiPageBodyComponent.vue";

export default {
  name: "FentiBotPage",
  components: {
    TheMasthead,
    BannerComponent,
    FentiBotBodyComponent,
  },
  data() {
    return {
      siteTitle: process.env.VUE_APP_WEBSITE_NAME,
      pageTitle: `${process.env.VUE_APP_FENTI_BOT_NAME} Bot`,
      bannerIcon: "images/FentyBotLogo.png",
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
