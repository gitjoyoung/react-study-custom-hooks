import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import InputHookExample from "./pages/InputHookExample/InputHookExample.tsx";
import InputHookExample2 from "./pages/InputHookExample2/InputHookExample2.tsx";
import { ROUTE } from "./constant/route.ts";
import ClickHookExample from "./pages/ClickHookExample/ClickHookExample.tsx";
import ConfirmHookExample from "./pages/ConfirmHookExample/ConfirmHookExample.tsx";
import TitleHookExample from "./pages/TitleHookExample/TitleHookExample.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: ROUTE.HOME,
        element: <Home />, // 기본 페이지
      },
      {
        path: ROUTE.INPUT_HOOK_EXAMPLE,
        element: <InputHookExample />,
      },
      {
        path: ROUTE.INPUT_HOOK_EXAMPLE2,
        element: <InputHookExample2 />,
      },
      {
        path: ROUTE.TITLE_HOOK_EXAMPLE,
        element: <TitleHookExample />,
      },
      {
        path: ROUTE.ClICK_HOOK_EXAMPLE,
        element: <ClickHookExample />,
      },
      {
        path: ROUTE.CONFIRM_HOOK_EXAMPLE,
        element: <ConfirmHookExample />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
