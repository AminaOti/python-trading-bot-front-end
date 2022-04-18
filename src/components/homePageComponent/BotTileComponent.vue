<template>
  <div class="bot-card" v-on:click="navigateToBotPage" data-test="bot-tile">
    <div class="grid-container">
      <div class="grid-child">
        <img
          class="grid-child-left-column"
          :src="require(`@/assets/${botLogo}`)"
          alt="thicc-dough-crypto-logo"
        />
      </div>
      <div class="grid-child-right-column">
        <p>{{ botName }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import "../../assets/styles/theme-colors.scss";
export default {
  name: "BotTileComponent",
  props: {
    botName: String,
    botLogo: String,
  },

  data() {
    return {
      quantity: 0,
    };
  },
  methods: {
    // emit the new search term to SearchBar
    navigateToBotPage() {
      this.quantity = 1;
      if (this.botName == "Fenti") {
        this.$router.push("/FentiBot");
      }
      return true;
    },
  },
};
</script>

<style scoped>
.bot-card {
  box-shadow: 2px 2px 10px var(--secondary-color);
  transition: 0.3s;
  padding: 16px;
  margin-bottom: 20px;
  width: 400px;
  height: 200px;
  color: var(--secondary-color);
}

.bot-card:hover {
  box-shadow: 0 4px 16px var(--secondary-variant-color);
}
.grid-container {
  display: flex;
  grid-template-columns: fit-content(100%) fit-content(100%) 1fr;
  grid-gap: 20px;
  grid-template-areas: "right-column";
}
.grid-child-left-column {
  margin-top: 10px;
  margin-left: 10px;
}
.grid-child-right-column {
  grid-area: right-column;
  color: var(--secondary-color);
  margin-top: 45px;
  align-items: center;
  justify-content: center;
  margin-top: 55px;
  font-size: 30px;
  font-weight: normal;
}

img {
  width: 130px;
  height: 130px;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid white;
}
</style>
