import React from "react";
import classNames from "classnames";
import Typography from "../Typo/Typography";
import { MotionDiv } from "@/components/MotionDiv/MotionDiv";

interface SectionProp {
  children: React.ReactNode;
  title?: string;
  styles?: string;
  sectionBackground: boolean;
  anchor?: string;
}

export default function Section({
  title,
  styles,
  sectionBackground,
  anchor,
  children,
}: SectionProp) {
  const sectionStyle = classNames({
    "2xl:px-[144px] sm:px-32px px-16px": true,
    "bg-background_section 2xl:py-[90px] xl:py-[70px] sm:py-[50px] py-[40px]":
      sectionBackground,
    "2xl:pt-[90px] xl:pt-[70px] sm:pt-[50px] pt-[40px]": !sectionBackground,
  });
  return (
    <section id={anchor} className={`${sectionStyle} ${styles}`}>
      <MotionDiv
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {title && <Typography tag="h2" text={title} />}
      </MotionDiv>
      <div>{children}</div>
    </section>
  );
}
