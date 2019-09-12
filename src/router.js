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
      meta: { title: "系统设置", icon: "s-tools" },
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
      path: "/table",
      component: Layout,
      meta: { title: "Table", icon: "document" },
      children: [
        {
          path: "index",
          component: () => import("@/views/table/index"),
          name: "tableIndex",
          meta: { title: "Table" }
        }
      ]
    },
    {
      path: "/form",
      component: Layout,
      meta: { title: "Form", icon: "s-grid" },
      children: [
        {
          path: "formIndex",
          component: () => import("@/views/form/index"),
          name: "tableIndex",
          meta: { title: "Form" }
        }
      ]
    },
    {
      path: "/about",
      component: Layout,
      meta: { title: "Dashboard", icon: "lollipop" },
      children: [
        {
          path: "",
          name: "about",
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(/* webpackChunkName: "about" */ "./views/About.vue"),
          meta: { title: "About", icon: "about" }
        }
      ]
    },
    {
      path: "/external-link",
      component: Layout,
      meta: { title: "Dashboard", icon: "location" },
      children: [
        {
          path: "https://www.baidu.com",
          name: "about1",
          meta: { title: "External Link", icon: "link" }
        }
      ]
    }
  ]
});
