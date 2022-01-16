import React from "react";
import DropdownMenu from "./DropdownMenu";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-5">
      <h1 className="text-lg font-bold">Crypto Dashboard</h1>
      <DropdownMenu />
    </header>
  );
};

export default Header;
