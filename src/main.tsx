import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import router from "./routes/index.tsx";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<div>페이지 로딩 중...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);
