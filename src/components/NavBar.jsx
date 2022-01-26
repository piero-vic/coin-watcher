import React from "react";
import NavItem from "./NavItem";

const NavBar = () => {
  return (
    <nav className="flex p-[2px] bg-white border border-white gap-2 w-fit sm:justify-self-center dark:bg-zinc-900 dark:border-zinc-900 rounded-2xl">
      <NavItem to="/">Chart</NavItem>
      <NavItem to="/portfolio">Portfolio</NavItem>
      <NavItem to="/news">News</NavItem>
    </nav>
  );
};

export default NavBar;
