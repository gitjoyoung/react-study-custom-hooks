import { ROUTE } from "@/constant/route";
import { Link } from "react-router-dom";

export default function Header() {
  const routeList = [
    ROUTE.HOME,
    ROUTE.INPUT_HOOK_EXAMPLE,
    ROUTE.INPUT_HOOK_EXAMPLE2,
    ROUTE.TITLE_HOOK_EXAMPLE,
  ];
  return (
    <div className="bg-green-400 py-3 ">
      <Link className="border p-1 rounded-md" to={ROUTE.HOME}>
        홈 화면
      </Link>
      <div className="flex gap-2 bg-white">
        {routeList.map((route) => (
          <Link className="border border-black" to={route} key={route}>
            {route}
          </Link>
        ))}
      </div>
    </div>
  );
}
