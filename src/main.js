import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/reset.css";
import "@/assets/a4.css";
import "@/assets/global.css";

createApp(App).use(router).mount("#app");
