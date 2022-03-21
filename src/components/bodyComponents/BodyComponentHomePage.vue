<template>
  <div class="bodyComponentHomePage-container">
    <h1>Hello</h1>
  </div>
</template>

<script>
import "../../assets/styles/theme-colors.scss";
export default {
  name: "BodyComponentHomePage",
  data() {
    return {};
  },
};
</script>

<style scoped>
.bodyComponentHomePage-container {
  color: var(--secondary-variant-color);
  background-color: var(--primary-color);
  padding: 1%;
  height: 100vh;
}
</style>
