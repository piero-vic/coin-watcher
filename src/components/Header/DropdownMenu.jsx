import React, { useContext } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  FiFileText,
  FiInfo,
  FiMoon,
  FiMoreHorizontal,
  FiSun,
} from "react-icons/fi";
import { AiOutlineGithub } from "react-icons/ai";
import { ThemeContext } from "../../contexts/ThemeContext";

const DropdownMenu = ({ toggleModal }) => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <Menu as={"div"} className="relative justify-self-end">
      <Menu.Button className="rounded-2xl border border-white bg-white p-2 text-xl hover:border-gray-500 dark:border-zinc-900 dark:bg-zinc-900 dark:hover:border-gray-500">
        <FiMoreHorizontal />
      </Menu.Button>

      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items className="absolute right-0 top-3 flex w-56 flex-col rounded-2xl bg-white p-3 drop-shadow-xl dark:bg-zinc-900">
          <Menu.Item
            as={"button"}
            onClick={() => toggleModal("About")}
            className="flex items-center justify-between p-1 font-medium"
          >
            <span>About</span>
            <FiInfo aria-hidden />
          </Menu.Item>

          <Menu.Item
            as={"a"}
            href="https://github.com/piero-vic/crypto-dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-1"
          >
            <span>GitHub</span>
            <AiOutlineGithub aria-hidden />
          </Menu.Item>

          <Menu.Item
            as={"button"}
            onClick={toggleDarkMode}
            className="flex items-center justify-between p-1 font-medium"
          >
            <span>{darkMode ? "Light Theme" : "Dark Theme"}</span>
            {darkMode ? <FiMoon aria-hidden /> : <FiSun aria-hidden />}
          </Menu.Item>

          <Menu.Item
            as={"button"}
            onClick={() => toggleModal("MIT License")}
            className="flex items-center justify-between p-1 font-medium"
          >
            <span>License</span>
            <FiFileText aria-hidden />
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropdownMenu;
