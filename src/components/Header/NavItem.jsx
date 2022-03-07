import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = (props) => {
  const baseClasses = "py-1 px-3 rounded-2xl";
  const activeClasses = baseClasses + " bg-stone-100 dark:bg-zinc-800";
  const { to, children } = props;

  return (
    <NavLink
      className={({ isActive }) => (isActive ? activeClasses : baseClasses)}
      to={to}
    >
      {children}
    </NavLink>
  );
};

export default NavItem;
