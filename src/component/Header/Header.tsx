import { ROUTE } from "@/constant/route";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-green-400 py-3">
      <h1>헤더 영역</h1>

      <Link to={ROUTE.HOME}>홈</Link>
      <Link to={ROUTE.INPUT_HOOK_EXAMPLE}>인풋 페이지</Link>
      <Link to={ROUTE.INPUT_HOOK_EXAMPLE2}>인풋 페이지2</Link>
    </div>
  );
}
