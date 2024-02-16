"use client";

import Button from "@/components/UI/Button/Button";
import { ModalContext } from "@/store";
import { useContext } from "react";

interface DetailsButtonProps {
  name: string;
}

const DetailsButton = ({ name }: DetailsButtonProps) => {
  const { projectModalToggle } = useContext(ModalContext);
  return (
    <Button buttonSize="small" onClick={() => projectModalToggle(name)}>
      More information
    </Button>
  );
};

export default DetailsButton;
