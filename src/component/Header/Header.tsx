import { ROUTE } from "@/constant/route";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-green-400 py-3 ">
      <div className="flex flex-wrap gap-2 bg-transparent">
        {Object.entries(ROUTE).map(([key, value], index) => (
          <Link
            className="border border-black rounded-sm p-1 bg-white"
            to={value}
            key={key + index}
          >
            {key}
          </Link>
        ))}
      </div>
    </div>
  );
}
