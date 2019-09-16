import router from "./router";
import getPageTitle from "./utils/get-page-title";
import { getToken } from "@/utils/auth"; // get token from cookie

const whiteList = ["/login", "/auth-redirect"];

router.beforeEach(async (to, from, next) => {
  document.title = getPageTitle(to.meta.title);

  const hasToken = getToken();

  if (hasToken) {
    if (to.path === "/login") {
      next({ path: "/" });
    } else {
      next();
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next(`/login?redirect=${to.path}`);
    }
  }
});
