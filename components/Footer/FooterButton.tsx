"use client";

import { useGlobalContext } from "@/store";
import Button from "../UI/Button/Button";

export default function FooterButton() {
  const { toggle } = useGlobalContext();
  return (
    <Button onClick={toggle} defaultButton>
      Contact me!
    </Button>
  );
}
