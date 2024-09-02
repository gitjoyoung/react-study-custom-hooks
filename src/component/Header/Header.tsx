import { ROUTE } from "@/constant/route";
import { Link } from "react-router-dom";

export default function Header() {
  const routeList = [
    ROUTE.INPUT_HOOK_EXAMPLE,
    ROUTE.INPUT_HOOK_EXAMPLE2,
    ROUTE.TITLE_HOOK_EXAMPLE,
    ROUTE.ClICK_HOOK_EXAMPLE,
    ROUTE.CONFIRM_HOOK_EXAMPLE,
    ROUTE.PREVENT_LEAVE_HOOK_EXAMPLE,
    ROUTE.BEFORE_LEAVE_EXAMPLE,
    ROUTE.FADE_IN_HOOK_EXAMPLE,
    ROUTE.IMAGE_HOOK_EXAMPLE,
    ROUTE.NETWORK_HOOK_EXAMPLE,
    ROUTE.SCROll_HOOK_EXAMPLE,
    ROUTE.FULL_SCREEN_HOOK_EXAMPLE,
    ROUTE.NOTIFICATION_EXAMPLE,
    ROUTE.AXIOS_HOOK_EXAMPLE,
    ROUTE.SEARCH_HOOK_EXAMPLE,
  ];
  return (
    <div className="bg-green-400 py-3 ">
      <Link className="border p-1 rounded-md" to={ROUTE.HOME}>
        홈 화면
      </Link>
      <div className="flex flex-wrap gap-2 bg-transparent">
        {routeList.map((route) => (
          <Link
            className="border border-black rounded-sm p-1 bg-white"
            to={route}
            key={route}
          >
            {route}
          </Link>
        ))}
      </div>
    </div>
  );
}
