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
      meta: { title: "Dashboard", icon: "location" },
      children: [
        {
          path: "dashboard",
          component: () => import("@/views/dashboard/index"),
          name: "Dashboard",
          meta: { title: "我的面板", icon: "eleme" }
        }
      ]
    },
    {
      path: "/setting",
      component: Layout,
      meta: { title: "系统设置", icon: "menu" },
      children: [
        {
          path: "base",
          component: () => import("@/views/dashboard/index"),
          name: "base",
          meta: { title: "base" }
        },
        {
          path: "project",
          component: () => import("@/views/dashboard/index"),
          name: "project",
          meta: { title: "project" }
        },
        {
          path: "plan",
          component: () => import("@/views/dashboard/index"),
          name: "plan",
          meta: { title: "plan" }
        },
        {
          path: "issue",
          component: () => import("@/views/dashboard/index"),
          name: "issue",
          meta: { title: "issue" }
        }
      ]
    },
    {
      path: "/approve",
      component: Layout,
      meta: { title: "审批中心", icon: "menu" },
      children: [
        {
          path: "settings",
          component: () => import("@/views/dashboard/index"),
          name: "approveSettings",
          meta: { title: "审批设置" }
        },
        {
          path: "project",
          component: () => import("@/views/dashboard/index"),
          name: "approveProject",
          meta: { title: "project设置" }
        },
        {
          path: "plan",
          component: () => import("@/views/dashboard/index"),
          name: "approvePlan",
          meta: { title: "plan设置" }
        },
        {
          path: "issue",
          component: () => import("@/views/dashboard/index"),
          name: "approveissue",
          meta: { title: "issue设置" }
        }
      ]
    },
    {
      path: "/about",
      component: Layout,
      meta: { title: "Dashboard", icon: "location" },
      children: [
        {
          path: "",
          name: "about",
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(/* webpackChunkName: "about" */ "./views/About.vue"),
          meta: { title: "about", icon: "about" }
        }
      ]
    }
  ]
});
