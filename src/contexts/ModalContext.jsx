import { createContext, useState, useEffect, useRef } from "react";

export const ModalContext = createContext({});

export const ModalProvider = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState();

  const toggleModal = (content = false) => {
    setIsOpen(!isOpen);
    if (content) setModalContent(content);
  };

  const modalRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!modalRef.current?.contains(event.target)) setIsOpen(false);
    };

    document.addEventListener("mousedown", handler);

    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <ModalContext.Provider
      value={{ isOpen, modalRef, toggleModal, modalContent }}
      {...props}
    />
  );
};
