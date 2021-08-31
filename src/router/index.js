import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/bar",
    name: "Bar",
    component: () => import("../views/Bar.vue")
  },
  {
    path: "/doughnut",
    name: "Doughnut",
    component: () => import("../views/Doughnut.vue")
  },
  {
    path: "/pie",
    name: "Pie",
    component: () => import("../views/Pie.vue")
  },
  {
    path: "/radar",
    name: "Radar",
    component: () => import("../views/Radar.vue")
  },
  {
    path: "/polar-area",
    name: "PolarArea",
    component: () => import("../views/PolarArea.vue")
  },
  {
    path: "/bubble",
    name: "Bubble",
    component: () => import("../views/Bubble.vue")
  },
  {
    path: "/scatter",
    name: "Scatter",
    component: () => import("../views/Scatter.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes
});

export default router;
