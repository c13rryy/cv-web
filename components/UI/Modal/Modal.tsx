"use client";

import { disableScroll } from "@/helpers/disableScroll";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  children?: React.ReactNode;
  isOpen?: boolean;
  toggle?: () => void;
}

export default function Modal({ children, isOpen }: ModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      disableScroll(isOpen);
    }

    return () => {
      disableScroll(false);
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return mounted
    ? createPortal(
        <div className="fixed w-full left-0px top-0px h-full flex justify-center items-center z-[150] bg-[#000] bg-opacity-25 backdrop-blur-sm">
          <div className="mds:w-[450px] w-full modalAnim bg-[#dcdcdc] xl:p-30px sm:p-20px p-15px rounded-[23px] m-20px">
            {children}
          </div>
        </div>,
        document.getElementById("modal")!
      )
    : null;
}
