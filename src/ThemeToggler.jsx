import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeToggler = ({ children }) => {
  const { darkMode } = useContext(ThemeContext);
  return <div className={darkMode && "dark"}>{children}</div>;
};

export default ThemeToggler;
