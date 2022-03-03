<template>
  <div class="container">
    <header>
      <h1 v-bind:src="backgroundImage">hello</h1>
    </header>
  </div>
</template>

<script>
import "../assets/styles/theme-colors.scss";

export default {
  name: "BannerComponent",
  props: {
    bannerTitle: String,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.container {
  background-image: url("../assets/images/BannerComponentBackground.jpeg");
  height: 500px;
}
h1 {
  text-align: center;
  color: var(--secondary-color);
  font-size: var(--title-size);
}
</style>
