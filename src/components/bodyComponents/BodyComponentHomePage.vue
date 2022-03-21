<template>
  <div class="bodyComponentHomePage-container">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
import "../../assets/styles/theme-colors.scss";
import "../../assets/styles/theme-fonts.scss";

export default {
  name: "BodyComponentHomePage",
  data() {
    return {
      title: "Thicc Dough Crypto Bots",
    };
  },
};
</script>

<style scoped>
.bodyComponentHomePage-container {
  background-color: var(--primary-color);
  padding: 1%;
  height: 100vh;
}

h1 {
  font-size: 40px;
  font-weight: normal;
  color: var(--secondary-color);
  text-align: center;
}
</style>
