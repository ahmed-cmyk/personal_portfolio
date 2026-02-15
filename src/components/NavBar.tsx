import { Link } from "@tanstack/react-router";

export function NavBar() {
  return (
    <div className="flex justify-center mt-4">
      <nav className="flex gap-2 px-3 py-2 bg-white/5 backdrop-blur-xl border border-white/20 rounded-full shadow-lg">
        <Link
          to="/"
          activeProps={{ className: "font-bold text-sky-500" }}
          activeOptions={{ exact: true }}
          className="px-5 py-2 rounded-full hover:bg-white/20 hover:text-sky-400 transition-all"
        >
          Home
        </Link>
        <Link
          to="/posts"
          activeProps={{ className: "font-bold text-sky-500" }}
          className="px-5 py-2 rounded-full hover:bg-white/20 hover:text-sky-400 transition-all"
        >
          Posts
        </Link>
        <Link
          to="/about"
          activeProps={{ className: "font-bold text-sky-500" }}
          activeOptions={{ exact: true }}
          className="px-5 py-2 rounded-full hover:bg-white/20 hover:text-sky-400 transition-all"
        >
          About
        </Link>
      </nav>
    </div>
  );
}