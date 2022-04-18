<template>
  <div class="bodyComponentHomePage-container">
    <h1>{{ title }}</h1>
    <div v-for="bot in bots" :key="bot.botName" class="bot-tile-container">
      <BotTileComponent
        :botName="bot.botName"
        :botLogo="bot.botLogo"
      ></BotTileComponent>
    </div>
  </div>
</template>

<script>
import "../../assets/styles/theme-colors.scss";
import "../../assets/styles/theme-fonts.scss";
import BotTileComponent from "./BotTileComponent.vue";

export default {
  name: "BodyComponentHomePage",
  components: { BotTileComponent },
  data() {
    return {
      title: process.env.VUE_APP_WEBSITE_NAME,
      bots: [
        {
          botName: process.env.VUE_APP_FENTI_BOT_NAME,
          botLogo: "images/FentyBotLogo.png",
        },
        {
          botName: process.env.VUE_APP_FUTURES_BOT_NAME,
          botLogo: "images/testImage.jpeg",
        },
      ],
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

.bot-tile-container {
  margin-top: 50px;
  margin-left: 60px;
  float: left;
}

h1 {
  font-size: 40px;
  font-weight: bold;
  color: var(--secondary-color);
  text-align: center;
  margin-top: 20px;
}
</style>
