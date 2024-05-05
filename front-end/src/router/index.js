import { createRouter, createWebHistory } from "vue-router"
import DailyView from "../views/DailyView.vue"
import PracticeView from "../views/PracticeView.vue";
import StatsView from "../views/StatsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", redirect: "/daily"},

    {
      path: "/daily",
      name: "daily",
      component: DailyView
    },

    {
      path: "/practice",
      name: "practice",
      component: PracticeView
    },

    {
      path: "/stats",
      name: "stats",
      component: StatsView
    },
  ]
})

export default router
