"use client";

import anchorScroll from "@/helpers/anchorScroll";
import LinkCustom from "../UI/Link/LinkCustom";
import { usePathname } from "next/navigation";

interface FooterLinkProps {
  text: string;
  href: string;
}

export default function FooterLink({ text, href }: FooterLinkProps) {
  const path = usePathname();
  return (
    <LinkCustom
      linkType={path.length > 1 ? "Link" : "button"}
      onClick={() => {
        const id = href.slice(1);
        anchorScroll(id);
      }}
      href={`/${href}`}
      classes="text-14 font-semibold leading-28 text-[#fff] px-[6px] animation-icon"
    >
      {text}
    </LinkCustom>
  );
}
