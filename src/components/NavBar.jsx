import React from "react";
import NavItem from "./NavItem";

const NavBar = () => {
  return (
    <nav className="flex w-fit gap-2 rounded-2xl border border-white bg-white p-[2px] dark:border-zinc-900 dark:bg-zinc-900 sm:justify-self-center">
      <NavItem to="/">Coins</NavItem>
      <NavItem to="/news">News</NavItem>
    </nav>
  );
};

export default NavBar;
