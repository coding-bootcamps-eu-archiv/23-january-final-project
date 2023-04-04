import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/reset.css";
import "@/assets/a4.css";
import "@/assets/global.css";
import store from "./store/store.js";

createApp(App).use(router).use(store).mount("#app");
