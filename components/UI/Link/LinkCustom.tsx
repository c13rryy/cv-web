import Link from "next/link";
import React from "react";

interface LinkProps {
  linkType: "button" | "Link";
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  classes?: string;
}

export default function LinkCustom({
  linkType,
  href,
  children,
  onClick,
  classes,
}: LinkProps) {
  if (linkType === "Link") {
    return (
      <Link onClick={onClick} className={classes} href={href}>
        {children}
      </Link>
    );
  }

  if (linkType === "button") {
    return (
      <button className={classes} onClick={onClick} type="button">
        {children}
      </button>
    );
  }

  return null;
}
