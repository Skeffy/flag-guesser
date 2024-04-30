import { createRouter, createWebHistory } from "vue-router"
import DailyView from "../views/DailyView.vue"
import PracticeView from "../views/PracticeView.vue";

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
  ]
})

export default router
