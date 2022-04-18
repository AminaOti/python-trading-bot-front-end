<template>
  <span test-id="FentiBotPage"></span>
  <TheMasthead :siteTitle="siteTitle"></TheMasthead>
  <h1>Fenti Bot Page</h1>
</template>
<script>
import TheMasthead from "../components/TheMastHead.vue";
export default {
  name: "FentiBotPage",
  components: {
    TheMasthead,
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
