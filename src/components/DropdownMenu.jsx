import React, { useEffect, useRef, useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { AiOutlineInfoCircle, AiOutlineGithub } from "react-icons/ai";
import { BsSun } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";

const DropdownMenu = () => {
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
    <div ref={menuRef} className="relative">
      <button
        className="p-2 text-xl border border-white-100 rounded-2xl hover:border-gray-400"
        onClick={() => handleButtonClick()}
      >
        <HiDotsHorizontal />
      </button>
      {displayMenu && (
        <span className="absolute right-0 flex flex-col w-56 p-3 bg-white border top-12 border-white-100 rounded-2xl drop-shadow-xl">
          <a href="" className="flex items-center justify-between p-1">
            <div>About</div>
            <AiOutlineInfoCircle />
          </a>
          <a href="" className="flex items-center justify-between p-1">
            <div>GitHub</div>
            <AiOutlineGithub />
          </a>
          <a href="" className="flex items-center justify-between p-1">
            <div>Dark Theme</div>
            <BsSun />
          </a>
          <a href="" className="flex items-center justify-between p-1">
            <div>License</div>
            <IoDocumentTextOutline />
          </a>
        </span>
      )}
    </div>
  );
};

export default DropdownMenu;
