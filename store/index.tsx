/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { createContext, useContext, useState } from "react";

interface ProjectModalProps {
  [key: string]: boolean;
}

export const ModalContext = createContext<{
  open: boolean;
  toggle: () => void;
}>({
  open: false,
  toggle: () => {},
});

export function ModalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(prevState => !prevState);
  }

  const modalCtx = {
    toggle: handleToggle,
    open: isOpen,
  };

  return (
    <ModalContext.Provider value={modalCtx}>{children}</ModalContext.Provider>
  );
}

export const useGlobalContext = () => useContext(ModalContext);
