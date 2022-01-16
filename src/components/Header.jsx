import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-5">
      <h1 className="text-lg font-bold">Crypto Dashboard</h1>
      <button className="p-2 text-xl border border-white-100 rounded-2xl hover:border-gray-400">
        <HiDotsHorizontal />
      </button>
    </header>
  );
};

export default Header;
