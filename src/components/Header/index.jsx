import React from "react";

const Header = ({ children }) => {
  return (
    <header className="grid grid-cols-2 items-center justify-between p-5 sm:grid-cols-3 z-10">
      {children}
    </header>
  );
};

export default Header;
