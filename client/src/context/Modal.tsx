import React, { createContext, useState } from "react";

type ModalContextData = {
  modal: boolean;
  closeModal(): void;
  openModal(): void;
};

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

export const ModalProvider: React.FC = ({ children }) => {
  const [modal, setModal] = useState(false);
  function closeModal() {
    setModal(false);
  }
  function openModal() {
    setModal(true);
  }
  return (
    <ModalContext.Provider value={{ modal, closeModal, openModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
