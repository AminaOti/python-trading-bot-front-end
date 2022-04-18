<template>
  <span test-id="FentiBotPage"></span>
  <TheMasthead :siteTitle="siteTitle"></TheMasthead>
  <BannerComponent
    :bannerTitle="pageTitle"
    :bannerIcon="bannerIcon"
  ></BannerComponent>
</template>
<script>
import TheMasthead from "../components/TheMastHead.vue";
import BannerComponent from "../components/bannerComponent/BannerComponent.vue";

export default {
  name: "FentiBotPage",
  components: {
    TheMasthead,
    BannerComponent,
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
