import React, { useContext } from "react";
import useToggleMenu from "../hooks/useToggleMenu";
import { HiDotsHorizontal } from "react-icons/hi";
import { AiOutlineInfoCircle, AiOutlineGithub } from "react-icons/ai";
import { BsSun, BsMoon } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";
import { ThemeContext } from "../contexts/ThemeContext";

const DropdownMenu = () => {
  const [displayMenu, menuRef, toggleMenu] = useToggleMenu();
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div ref={menuRef} className="relative">
      <button
        className="p-2 text-xl bg-white border border-white dark:bg-zinc-900 dark:border-zinc-900 rounded-2xl hover:border-gray-500 dark:hover:border-gray-500"
        onClick={toggleMenu}
      >
        <HiDotsHorizontal />
      </button>
      {displayMenu && (
        <span className="absolute right-0 z-10 flex flex-col w-56 p-3 bg-white dark:bg-zinc-900 top-12 rounded-2xl drop-shadow-xl">
          <a href="" className="flex items-center justify-between p-1">
            <div>About</div>
            <AiOutlineInfoCircle />
          </a>
          <a href="" className="flex items-center justify-between p-1">
            <div>GitHub</div>
            <AiOutlineGithub />
          </a>
          <button
            onClick={toggleDarkMode}
            className="flex items-center justify-between p-1 font-medium"
          >
            <div>{darkMode ? "Light Theme" : "Dark Theme"}</div>
            {darkMode ? <BsMoon /> : <BsSun />}
          </button>
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
