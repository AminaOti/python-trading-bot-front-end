<template>
  <header class="header-bar">
    <div class="hello-there"></div>
    <h2>{{ siteTitle }}</h2>
  </header>
</template>

<script>
import "../assets/css/theme-colors.scss";

export default {
  name: "TheMasthead",
  props: {
    siteTitle: String,
  },
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
