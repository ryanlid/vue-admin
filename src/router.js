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
      path: "/settings",
      component: Layout,
      meta: { title: "系统设置", icon: "menu" },
      children: [
        {
          path: "base",
          component: () => import("@/views/settings/base"),
          name: "base",
          meta: { title: "base" }
        },
        {
          path: "project",
          component: () => import("@/views/settings/project"),
          name: "project",
          meta: { title: "project" }
        },
        {
          path: "plan",
          component: () => import("@/views/settings/plan"),
          name: "plan",
          meta: { title: "plan" }
        },
        {
          path: "issue",
          component: () => import("@/views/settings/issue"),
          name: "issue",
          meta: { title: "issue" }
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
    },
    {
      path: "/external-link",
      component: Layout,
      meta: { title: "Dashboard", icon: "location" },
      children: [
        {
          path: "https://panjiachen.github.io/vue-element-admin-site/#/",
          name: "about1",
          meta: { title: "External Link", icon: "link" }
        }
      ]
    }
  ]
});
