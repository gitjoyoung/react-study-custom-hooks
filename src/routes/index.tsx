import App from "@/App";
import { ROUTE } from "@/constant/route";
import Home from "@/pages/Home/Home";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

// Lazy-loaded components
const routesConfig = [
  {
    path: ROUTE.INPUT_HOOK_EXAMPLE,
    component: lazy(() => import("@/pages/InputHookExample")),
  },
  {
    path: ROUTE.INPUT_HOOK_EXAMPLE2,
    component: lazy(() => import("@/pages/InputHookExample2")),
  },
  {
    path: ROUTE.TITLE_HOOK_EXAMPLE,
    component: lazy(() => import("@/pages/TitleHookExample")),
  },
  {
    path: ROUTE.CLICK_HOOK_EXAMPLE,
    component: lazy(() => import("@/pages/ClickHookExample")),
  },
  {
    path: ROUTE.CONFIRM_HOOK_EXAMPLE,
    component: lazy(() => import("@/pages/ConfirmHookExample")),
  },
  {
    path: ROUTE.PREVENT_LEAVE_HOOK_EXAMPLE,
    component: lazy(() => import("@/pages/PreventLeaveExample")),
  },
  {
    path: ROUTE.BEFORE_LEAVE_EXAMPLE,
    component: lazy(() => import("@/pages/BeforeLeaveExample")),
  },
  {
    path: ROUTE.FADE_IN_HOOK_EXAMPLE,
    component: lazy(() => import("@/pages/FadeInHookExample")),
  },
  {
    path: ROUTE.IMAGE_HOOK_EXAMPLE,
    component: lazy(() => import("@/pages/ImageHookExample")),
  },
  {
    path: ROUTE.NETWORK_HOOK_EXAMPLE,
    component: lazy(() => import("@/pages/NetworkHookExample")),
  },
  {
    path: ROUTE.SCROLL_HOOK_EXAMPLE,
    component: lazy(() => import("@/pages/ScrollHookExample")),
  },
  {
    path: ROUTE.FULL_SCREEN_HOOK_EXAMPLE,
    component: lazy(() => import("@/pages/FullScreenHookExample")),
  },
  {
    path: ROUTE.NOTIFICATION_EXAMPLE,
    component: lazy(() => import("@/pages/NotificationExample")),
  },
  {
    path: ROUTE.AXIOS_HOOK_EXAMPLE,
    component: lazy(() => import("@/pages/AxiosHookExample")),
  },
  {
    path: ROUTE.SEARCH_HOOK_EXAMPLE,
    component: lazy(() => import("@/pages/SearchHookExample")),
  },
];

const router = createBrowserRouter([
  {
    path: ROUTE.HOME,
    element: <App />,
    children: [
      {
        path: ROUTE.HOME,
        element: <Home />,
      },
      ...routesConfig.map((route) => ({
        path: route.path,
        element: <route.component />,
      })),
    ],
  },
]);

export default router;
