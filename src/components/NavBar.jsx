import React from "react";

const NavBar = () => {
  return (
    <nav className="flex px-4 py-2 bg-white border border-white gap-6 w-fit sm:justify-self-center dark:bg-zinc-900 dark:border-zinc-900 rounded-2xl">
      <a href="/">Chart</a>
      <a href="">Portfolio</a>
      <a href="">News</a>
    </nav>
  );
};

export default NavBar;
