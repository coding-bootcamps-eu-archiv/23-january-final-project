import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/reset.css";
import "@/assets/a4.css";
import "@/assets/global.css";

import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      count: 0,
      firstName: "Nico",
      lastName: "König",
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});

createApp(App).use(router).use(store).mount("#app");
