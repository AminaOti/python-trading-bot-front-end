<template>
  <TheMasthead :siteTitle="Hello"></TheMasthead>
  <H1>FENTI</H1>
  <router-view></router-view>
</template>
<script>
import TheMasthead from "../components/TheMastHead.vue";
export default {
  components: {
    TheMasthead,
  },
};
</script>
