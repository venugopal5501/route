import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import login from "./components/login.vue";
import profile from "./components/profile.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "login",
    path: "/log",
    component: login,
  },
  {
    name: "profile",
    path: "/pro/:name",
    component: profile,
  },
];
const router = createRouter({ history: createWebHistory(), routes });

export default router;
