import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const inactiveLinkClasses = "py-1 px-3 rounded-2xl";
  const activeLinkClasses =
    "py-1 px-3 rounded-2xl bg-stone-100 dark:bg-zinc-800";

  return (
    <nav className="flex p-[2px] bg-white border border-white gap-2 w-fit sm:justify-self-center dark:bg-zinc-900 dark:border-zinc-900 rounded-2xl">
      <NavLink
        className={({ isActive }) =>
          isActive ? activeLinkClasses : inactiveLinkClasses
        }
        to="/"
      >
        Chart
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? activeLinkClasses : inactiveLinkClasses
        }
        to="/portfolio"
      >
        Portfolio
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? activeLinkClasses : inactiveLinkClasses
        }
        to="/news"
      >
        News
      </NavLink>
    </nav>
  );
};

export default NavBar;
