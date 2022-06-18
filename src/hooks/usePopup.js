import { useState, useEffect, useRef } from "react";

const usePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [popupContent, setPopupContent] = useState();

  const togglePopup = (content = false) => {
    setIsOpen(!isOpen);
    if (content) setPopupContent(content);
  };

  const popupRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!popupRef.current?.contains(event.target)) setIsOpen(false);
    };

    document.addEventListener("mousedown", handler);

    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return { isOpen, popupRef, togglePopup, popupContent };
};

export default usePopup;
