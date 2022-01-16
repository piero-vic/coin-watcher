import { useEffect, useRef, useState } from "react";

const useToggleMenu = () => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const toggleMenu = () => {
    setDisplayMenu(!displayMenu);
  };

  const menuRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) setDisplayMenu(false);
    };

    document.addEventListener("mousedown", handler);

    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return [displayMenu, menuRef, toggleMenu];
};

export default useToggleMenu;
