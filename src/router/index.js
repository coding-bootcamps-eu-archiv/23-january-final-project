import { createRouter, createWebHistory } from "vue-router";
import LandingPageView from "../views/LandingPageView.vue";
import CVClassicView from "../views/wip/CVClassicView.vue";

const routes = [
  {
    path: "/",
    name: "landingpage",
    component: LandingPageView,
  },
  {
    path: "/cv-classic",
    name: "cv classic",
    component: CVClassicView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
