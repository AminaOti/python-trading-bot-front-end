<template>
  <div class="container">
    <img src="../assets/images/BannerComponentBackground.jpeg" alt="Snow" />
    <header>
      <div class="centered"><BannerTitle /></div>
    </header>
  </div>
</template>

<script>
import "../assets/styles/theme-colors.scss";
import BannerTitle from "./BannerTitle.vue";

export default {
  name: "BannerComponent",
  props: {
    bannerTitle: String,
  },
  components: {
    BannerTitle,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.container {
  height: 10%;
}
h1 {
  text-align: center;
  color: var(--secondary-color);
  font-size: var(--title-size);
}
.container-title {
  margin-top: 100px;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--secondary-color);
}
</style>
