"use client";
import { useGlobalContext } from "@/store";
import Button from "../UI/Button/Button";

interface HeaderMenuButtonProp {
  closeMenu: () => void;
}

export default function HeaderMenuButton({ closeMenu }: HeaderMenuButtonProp) {
  const { toggle } = useGlobalContext();

  function handleClick() {
    toggle();
    closeMenu();
  }
  return (
    <Button onClick={handleClick} className="w-full mb-30px" buttonSize="small">
      Contact me
    </Button>
  );
}
