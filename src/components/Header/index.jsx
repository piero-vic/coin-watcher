import React from "react";
import DropdownMenu from "./DropdownMenu";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="grid grid-cols-2 items-center justify-between p-5 sm:grid-cols-3">
      <a className="hidden w-min text-lg font-bold sm:block" href="/">
        Coin Watcher
      </a>
      <NavBar />
      <DropdownMenu />
    </header>
  );
};

export default Header;
