<template>
  <div class="banner-container">
    <img
      src="../../assets/images/BannerComponentBackground.jpeg"
      alt="banner-background"
    />
    <header>
      <div class="centered">
        <BannerTitle :bannerTitle="bannerTitle" :bannerIcon="bannerIcon" />
      </div>
    </header>
  </div>
</template>

<script>
import "../../assets/styles/theme-colors.scss";
import BannerTitle from "./BannerTitle.vue";

export default {
  name: "BannerComponent",
  props: ["bannerTitle", "bannerIcon"],
  components: {
    BannerTitle,
  },
  data() {
    return {
      icon: "../../assets/images/ThiccDoughCryptoLogo.png",
    };
  },
};
</script>

<style scoped>
.banner-container {
  padding: 0px;
  margin-bottom: 0px;
  background-color: black;
}
img {
  width: 100%;
  height: 500px;
  object-fit: cover;
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
  top: 300px;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--secondary-color);
}
</style>
