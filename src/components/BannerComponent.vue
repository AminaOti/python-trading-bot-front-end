<template>
  <div>
    <img v-bind:src="backgroundImage" />
    <header>
      <h1>hello</h1>
    </header>
  </div>
</template>

<script>
import backgroundImage from "../assets/images/BannerComponentBackground.jpeg";

export default {
  name: "BannerComponent",
  props: {
    bannerTitle: String,
  },
  data() {
    return {
      backgroundImage: backgroundImage,
    };
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  color: white;
  font-size: var(--title-size);
}
</style>
