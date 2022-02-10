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
        className="rounded-2xl border border-white bg-white p-2 text-xl hover:border-gray-500 dark:border-zinc-900 dark:bg-zinc-900 dark:hover:border-gray-500"
        onClick={toggleMenu}
      >
        <FiMoreHorizontal />
      </button>
      {displayMenu && (
        <span className="absolute right-0 top-12 z-10 flex w-56 flex-col rounded-2xl bg-white p-3 drop-shadow-xl dark:bg-zinc-900">
          <button
            onClick={() => {
              toggleMenu();
              toggleModal("About");
            }}
            className="flex items-center justify-between p-1 font-medium"
          >
            <div>About</div>
            <FiInfo />
          </button>
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
              toggleModal("MIT License");
            }}
            className="flex items-center justify-between p-1 font-medium"
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
