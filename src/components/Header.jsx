import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";

const Header = () => {
  return (
    <header className="flex justify-between p-5 bg-gray-400">
      <h1 className="text-lg font-bold">Crypto Dashboard</h1>
      <button className="p-2 text-xl border border-white rounded-2xl hover:border-gray-500">
        <HiDotsHorizontal />
      </button>
    </header>
  );
};

export default Header;
