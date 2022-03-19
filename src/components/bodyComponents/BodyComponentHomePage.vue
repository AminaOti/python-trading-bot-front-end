<template>
  <h1>Hello</h1>
</template>

<script>
export default {
  name: "BodyComponentHomePage",
  props: {
    backgroundColour: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.bodyComponentHomePage_Container {
  background-color: var(--backgroundColour);
}
</style>
