import { createContext, useState, useEffect, useRef } from "react";

export const ModalContext = createContext({});

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const modalRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!modalRef.current.contains(event.target)) setIsOpen(false);
    };

    document.addEventListener("mousedown", handler);

    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <ModalContext.Provider value={{ isOpen, modalRef, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};
