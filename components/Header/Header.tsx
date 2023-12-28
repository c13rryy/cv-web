"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Button from "../UI/Button/Button";
import Logo from "../UI/Logo/Logo";
import HeaderButton from "./HeaderButton";
import HeaderNavbar from "./HeaderNavbar";
import HeaderMenu from "./HeaderMenu";
import useScroll from "@/hooks/useScroll";
import classNames from "classnames";
import { useGlobalContext } from "@/store";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [scrollDistance, setScrollDistance] = useState<number[]>([]);
  const value = useScroll();

  const handleOpen = useCallback(() => {
    setIsOpen(prevState => !prevState);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const sumOfWay = useMemo(
    () =>
      scrollDistance?.reduce(
        (prevValue, currentValue) => prevValue + currentValue,
        0
      ),
    [scrollDistance]
  );

  useEffect(() => {
    if (value.y > 150) {
      setShow(false);
    } else {
      setShow(true);
    }

    if (value.lastY > value.y && sumOfWay > 100) {
      setShow(true);
    }
  }, [sumOfWay, value.lastY, value.y]);

  useEffect(() => {
    const correctWay = value.lastY - value.y;
    if (correctWay > 0) {
      setScrollDistance((prev: number[]) => [...prev, correctWay]);
    } else if (show) {
      setScrollDistance([]);
    }
  }, [show, value.lastY, value.y]);

  const { toggle } = useGlobalContext();

  const path = usePathname();

  return (
    <>
      {" "}
      <header
        className={classNames(
          "fixed z-[110] left-0px top-0px bg-[#fff] w-full flex 2xl:px-[50px] xl:px-[40px] px-30px shadow-lg items-center h-[75px] justify-between",
          {
            " -translate-y-full transition-all duration-500": !show,
          },
          {
            "translate-y-0 transition-all duration-500": show,
          },
          { relative: path.length > 1 }
        )}
      >
        <div>
          <Logo logoType="header" />
        </div>
        <div className="xl:block hidden">
          <HeaderNavbar />
        </div>
        <div className="xl:block hidden">
          <Button onClick={toggle} buttonSize="small">
            <span>Contact me</span>
          </Button>
        </div>
        <div className="xl:hidden block">
          <HeaderButton onToggle={handleOpen} isOpen={open} />
        </div>
      </header>
      <HeaderMenu closeMenu={handleClose} isOpen={open} />
    </>
  );
}
