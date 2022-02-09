import React, { useContext } from "react";
import useToggleMenu from "../hooks/useToggleMenu";
import {
  FiFileText,
  FiInfo,
  FiMoon,
  FiMoreHorizontal,
  FiSun,
} from "react-icons/fi";
import { AiOutlineGithub } from "react-icons/ai";
import { ThemeContext } from "../contexts/ThemeContext";
import { ModalContext } from "../contexts/ModalContext";

const DropdownMenu = () => {
  const [displayMenu, menuRef, toggleMenu] = useToggleMenu();
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const { toggleModal } = useContext(ModalContext);

  return (
    <div ref={menuRef} className="relative justify-self-end">
      <button
        className="p-2 text-xl bg-white border border-white dark:bg-zinc-900 dark:border-zinc-900 rounded-2xl hover:border-gray-500 dark:hover:border-gray-500"
        onClick={toggleMenu}
      >
        <FiMoreHorizontal />
      </button>
      {displayMenu && (
        <span className="absolute right-0 z-10 flex flex-col w-56 p-3 bg-white dark:bg-zinc-900 top-12 rounded-2xl drop-shadow-xl">
          <a href="" className="flex items-center justify-between p-1">
            <div>About</div>
            <FiInfo />
          </a>
          <a
            href="https://github.com/piero-vic/crypto-dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-1"
          >
            <div>GitHub</div>
            <AiOutlineGithub />
          </a>
          <button
            onClick={toggleDarkMode}
            className="flex items-center justify-between p-1 font-medium"
          >
            <div>{darkMode ? "Light Theme" : "Dark Theme"}</div>
            {darkMode ? <FiMoon /> : <FiSun />}
          </button>
          <button
            onClick={() => {
              toggleMenu();
              toggleModal();
            }}
            className="flex items-center justify-between p-1"
          >
            <div>License</div>
            <FiFileText />
          </button>
        </span>
      )}
    </div>
  );
};

export default DropdownMenu;
