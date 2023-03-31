import { createRouter, createWebHistory } from "vue-router";
import LandingPageView from "@/views/LandingPageView.vue";
import CvGeneratorEntryView from "@/views/CvGeneratorEntryView.vue";
import CvGeneratorEditView from "@/views/CvGeneratorEditView.vue";

const routes = [
  {
    path: "/",
    name: "landingpage",
    component: LandingPageView,
  },
  {
    path: "/documents",
    name: "document-entry",
    component: CvGeneratorEntryView,
  },
  {
    path: "/documents/:id",
    name: "document-edit",
    component: CvGeneratorEditView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
