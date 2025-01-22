import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="w-screen h-24 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-50 border-b-2 border-gray-300 text-4xl content-center">
      <ul className="flex gap-5 justify-center">
        <NavItem title="Home" to="/" />
        <NavItem title="About" to="/about" />
        <NavItem title="Contact" to="/contact" />
        <NavItem title="Settings" to="/settings" />
      </ul>
    </nav>
  );
}

function NavItem({ title, to }) {
  return (
    <li>
      <Link to={to}>{title}</Link>
    </li>
  );
}

export { NavBar }