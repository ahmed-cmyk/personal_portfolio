import { Link } from "@tanstack/react-router";

export function NavBar() {
  return (
    <div className="flex justify-center mt-8 mb-12">
      <nav className="flex gap-8 text-sm font-medium tracking-wide">
        <Link
          to="/"
          activeProps={{ className: "text-stone-900 dark:text-stone-100" }}
          activeOptions={{ exact: true }}
          className="text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-200 transition-colors"
        >
          Home
        </Link>
        <Link
          to="/posts"
          activeProps={{ className: "text-stone-900 dark:text-stone-100" }}
          className="text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-200 transition-colors"
        >
          Writing
        </Link>
        <Link
          to="/about"
          activeProps={{ className: "text-stone-900 dark:text-stone-100" }}
          activeOptions={{ exact: true }}
          className="text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-200 transition-colors"
        >
          About
        </Link>
        <Link
          to="/contact"
          activeProps={{ className: "text-stone-900 dark:text-stone-100" }}
          activeOptions={{ exact: true }}
          className="text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-200 transition-colors"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
}