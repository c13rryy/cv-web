import React from "react";
import { VariantTypoTags, VariantTypoTagsStyles } from "./types";
import classNames from "classnames";
import typoConsts from "./TypoConsts/TypoConsts";

interface TypographyProps {
  text?: string;
  className?: string;
  children?: React.ReactNode;
  tag?: VariantTypoTags;
  type?: VariantTypoTagsStyles;
  color?: string;
}

export default function Typography({
  text,
  className,
  children,
  tag,
  type,
  color = "text_black_1",
}: TypographyProps) {
  const Tag = tag || "p";

  const classes = classNames({
    [typoConsts.h1]: tag === "h1",
    [typoConsts.h2]: tag === "h2",
    [typoConsts.h3]: tag === "h3",
    [typoConsts.h4]: tag === "h4",
    [typoConsts.defaultP]: type === "defaultP",
    [typoConsts.aboutP]: type === "aboutP",
    [typoConsts.thinP]: type === "thinP",
  });

  return (
    <Tag className={`${classes} ${className} ${color}`}>
      {text}
      {children}
    </Tag>
  );
}
