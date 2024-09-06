import App from "@/App";
import { ROUTE } from "@/routes/route";
import Home from "@/pages/Home/Home";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

// Lazy-loaded elements
const routesConfig = [
  {
    path: ROUTE.INPUT_HOOK_EXAMPLE,
    element: lazy(() => import("@/pages/InputHookExample")),
  },
  {
    path: ROUTE.INPUT_HOOK_EXAMPLE2,
    element: lazy(() => import("@/pages/InputHookExample2")),
  },
  {
    path: ROUTE.TITLE_HOOK_EXAMPLE,
    element: lazy(() => import("@/pages/TitleHookExample")),
  },
  {
    path: ROUTE.CLICK_HOOK_EXAMPLE,
    element: lazy(() => import("@/pages/ClickHookExample")),
  },
  {
    path: ROUTE.CONFIRM_HOOK_EXAMPLE,
    element: lazy(() => import("@/pages/ConfirmHookExample")),
  },
  {
    path: ROUTE.PREVENT_LEAVE_HOOK_EXAMPLE,
    element: lazy(() => import("@/pages/PreventLeaveExample")),
  },
  {
    path: ROUTE.BEFORE_LEAVE_EXAMPLE,
    element: lazy(() => import("@/pages/BeforeLeaveExample")),
  },
  {
    path: ROUTE.FADE_IN_HOOK_EXAMPLE,
    element: lazy(() => import("@/pages/FadeInHookExample")),
  },
  {
    path: ROUTE.IMAGE_LABEL_HOOK_EXAMPLE,
    element: lazy(() => import("@/pages/ImageLabelHookExample")),
  },
  {
    path: ROUTE.NETWORK_HOOK_EXAMPLE,
    element: lazy(() => import("@/pages/NetworkHookExample")),
  },
  {
    path: ROUTE.SCROLL_HOOK_EXAMPLE,
    element: lazy(() => import("@/pages/ScrollHookExample")),
  },
  {
    path: ROUTE.FULL_SCREEN_HOOK_EXAMPLE,
    element: lazy(() => import("@/pages/FullScreenHookExample")),
  },
  {
    path: ROUTE.NOTIFICATION_EXAMPLE,
    element: lazy(() => import("@/pages/NotificationExample")),
  },
  {
    path: ROUTE.AXIOS_HOOK_EXAMPLE,
    element: lazy(() => import("@/pages/AxiosHookExample")),
  },
  {
    path: ROUTE.SEARCH_HOOK_EXAMPLE,
    element: lazy(() => import("@/pages/SearchHookExample")),
  },
  {
    path: ROUTE.DATAMATRIX_HOOK_EXAMPLE,
    element: lazy(() => import("@/pages/DataMatrixHookExample")),
  },
  {
    path: ROUTE.REACT_QUERRY_EXAMPLE,
    element: lazy(() => import("@/pages/ReactQueryExample")),
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
        element: <route.element />,
      })),
    ],
  },
]);

export default router;
