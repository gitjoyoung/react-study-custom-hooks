import { ROUTE } from "@/routes/route";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-green-400 py-3 ">
      <div className="flex flex-wrap gap-2 bg-transparent">
        {Object.entries(ROUTE).map(([key, value], index) => (
          <Link
            className="border border-black font-bold rounded-sm p-1 px-2 bg-white"
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
