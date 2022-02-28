<template>
  <header class="header-bar">
    <div class="hello-there"></div>
    <H2> Thicc Dough Crypto</H2>
  </header>
</template>

<script>
import "../assets/css/theme-colors.scss";

export default {
  name: "TheMasthead",
};
</script>

<style scoped>
.header-bar {
  color: var(--secondary-color);
  background-color: var(--primary-color);
  padding: 1%;
}
h2 {
  padding-left: 7%;
}
</style>
