import React from "react";
import DropdownMenu from "./DropdownMenu";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="items-center justify-between p-5 grid grid-cols-2 sm:grid-cols-3">
      <h1 className="hidden text-lg font-bold sm:block w-min">
        Crypto Dashboard
      </h1>
      <NavBar />
      <DropdownMenu />
    </header>
  );
};

export default Header;
