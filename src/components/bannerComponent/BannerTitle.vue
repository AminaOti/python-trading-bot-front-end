<template>
  <div class="grid-container">
    <div class="grid-child">
      <img
        :src="require(`@/assets/${bannerIcon}`)"
        alt="thicc-dough-crypto-logo"
      />
    </div>

    <div class="grid-child-right-column">
      <h1>{{ bannerTitle }}</h1>
    </div>
  </div>
</template>

<script>
import "../../assets/styles/theme-fonts.scss";

export default {
  name: "BannerTitle",
  props: {
    bannerTitle: String,
    bannerIcon: String,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.h1 {
  color: white;
}
.grid-container {
  display: flex;
  grid-template-columns: fit-content(100%) fit-content(100%) 1fr;
  grid-gap: 20px;
  grid-template-areas: "right-column";
}
.grid-child-right-column {
  grid-area: right-column;
  color: var(--secondary-color);
  margin-top: 45px;
  align-items: center;
  justify-content: center;
  font-size: var(--tite-font-size);
}

img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid white;
}
</style>
