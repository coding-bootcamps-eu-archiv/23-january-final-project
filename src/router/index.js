import { createRouter, createWebHistory } from "vue-router";
import LandingPageView from "../views/LandingPageView.vue";
import CVClassicView from "../views/wip/CVClassicView.vue";
import CVCreativeView from "../views/wip/CVCreativeView.vue";
import CVGeneratorView from "../views/CVGeneratorView.vue";

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
  {
    path: "/cv-creative",
    name: "cv creative",
    component: CVCreativeView,
  },
  {
    path: "/cv-generator",
    name: "cv generator",
    component: CVGeneratorView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
