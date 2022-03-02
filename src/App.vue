<template>
  <TheMasthead :siteTitle="siteTitle"></TheMasthead>
</template>

<script>
import TheMasthead from "./components/TheMastHead.vue";

export default {
  name: "App",
  components: {
    TheMasthead,
  },
  data() {
    return {
      siteTitle: "Thicc Dough Crypto",
    };
  },
};
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
