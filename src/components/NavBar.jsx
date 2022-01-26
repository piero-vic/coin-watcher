import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex px-4 py-2 bg-white border border-white gap-6 w-fit sm:justify-self-center dark:bg-zinc-900 dark:border-zinc-900 rounded-2xl">
      <NavLink to="/">Chart</NavLink>
      <NavLink to="/portfolio">Portfolio</NavLink>
      <NavLink to="/news">News</NavLink>
    </nav>
  );
};

export default NavBar;
