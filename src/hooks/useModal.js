import { useState, useEffect, useRef } from "react";

const useModal = () => {
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

  return { isOpen, modalRef, toggleModal, modalContent };
};

export default useModal;
