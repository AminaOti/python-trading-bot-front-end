<template>
  <span test-id="HomePage"> </span>
  <TheMasthead :siteTitle="siteTitle"></TheMasthead>
  <BannerComponent
    :bannerTitle="siteTitle"
    :bannerIcon="bannerIcon"
  ></BannerComponent>
  <BodyComponentHomePage></BodyComponentHomePage>
</template>
<script>
import TheMasthead from "../components/TheMastHead.vue";
import BannerComponent from "../components/bannerComponent/BannerComponent.vue";
import BodyComponentHomePage from "../components/homePageComponent/HomePageBodyComponent.vue";

export default {
  name: "HomePage",
  components: {
    TheMasthead,
    BannerComponent,
    BodyComponentHomePage,
  },
  data() {
    return {
      siteTitle: "Thicc Dough Crypto",
      bannerIcon: "images/ThiccDoughCryptoLogo.png",
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
