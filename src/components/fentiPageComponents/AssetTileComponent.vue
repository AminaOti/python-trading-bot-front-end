<template>
  <div test-id="fenti-bot-tile"></div>
  <div>
    <h1>{{ assetTitle }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    assetTitle: String,
  },
};
</script>

<style lang="scss" scoped></style>
