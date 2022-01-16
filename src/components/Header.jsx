import React, { useEffect, useRef, useState } from "react";
import DropdownMenu from "./DropdownMenu";
import { HiDotsHorizontal } from "react-icons/hi";

const Header = () => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const handleButtonClick = () => {
    if (displayMenu) {
      setDisplayMenu(false);
    } else {
      setDisplayMenu(true);
    }
  };

  const menuRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) setDisplayMenu(false);
    };

    document.addEventListener("mousedown", handler);

    return () => document.removeEventListener("mousedown", handler);
  });

  return (
    <header className="flex items-center justify-between p-5">
      <h1 className="text-lg font-bold">Crypto Dashboard</h1>
      <div ref={menuRef} className="relative">
        <button
          className="p-2 text-xl border border-white-100 rounded-2xl hover:border-gray-400"
          onClick={() => handleButtonClick()}
        >
          <HiDotsHorizontal />
        </button>
        {displayMenu && <DropdownMenu />}
      </div>
    </header>
  );
};

export default Header;
