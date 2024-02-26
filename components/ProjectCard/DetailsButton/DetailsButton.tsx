"use client";

import { buttonConst } from "@/components/UI/Button/helpers";
import Link from "next/link";

interface DetailsButtonProps {
  href: string;
}

const DetailsButton = ({ href }: DetailsButtonProps) => {
  return (
    <Link href={href} className={`mds:w-fit w-full ${buttonConst.smallSize}`}>
      More information
    </Link>
  );
};

export default DetailsButton;
