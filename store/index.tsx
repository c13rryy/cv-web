/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { createContext, useContext, useState } from "react";

interface ProjectModalProps {
  [key: string]: boolean;
}

export const ModalContext = createContext<{
  open: boolean;
  toggle: () => void;
  projectOpen: ProjectModalProps;
  projectModalToggle: (activeName: string) => void;
}>({
  open: false,
  toggle: () => {},
  projectOpen: {},
  projectModalToggle: (activeName: string) => {},
});

export function ModalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const [projectOpen, setProjectOpen] = useState<ProjectModalProps>({});

  function handleToggle() {
    setIsOpen(prevState => !prevState);
  }

  function projectModalToggle(name: string) {
    setProjectOpen(prevState => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  }

  const modalCtx = {
    toggle: handleToggle,
    open: isOpen,
    projectModalToggle,
    projectOpen,
  };

  return (
    <ModalContext.Provider value={modalCtx}>{children}</ModalContext.Provider>
  );
}

export const useGlobalContext = () => useContext(ModalContext);
