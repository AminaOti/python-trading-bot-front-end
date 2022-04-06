// import { createApp } from "vue";
// import router from "@/router/router";
// import App from "./App.vue";
// const app = createApp(App);
// app.use(router);
// app.mount("#app");
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router.js"; // <---

createApp(App).use(router).mount("#app");
