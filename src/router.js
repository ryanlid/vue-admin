import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

export default new Router({
  routes: [
    {
      path: "/",
      component: Layout,
      redirect: "/dashboard",
      meta: { title: "Dashboard", icon: "dashboard" },
      children: [
        {
          path: "dashboard",
          component: () => import("@/views/dashboard/index"),
          name: "Dashboard",
          meta: { title: "Dashboard", icon: "dashboard" }
        }
      ]
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue"),
      meta: { title: "about", icon: "about" }
    }
  ]
});
