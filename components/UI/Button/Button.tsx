import { MouseEventHandler, PropsWithChildren } from "react";
import { VariantsButtonType } from "./types";
import classNames from "classnames";
import { buttonConst } from "./helpers";

type ButtonProps = PropsWithChildren<{
  type?: VariantsButtonType;
  onClick?: MouseEventHandler;
  className?: string;
  disabled?: boolean;
  buttonSize?: "small" | "large";
  defaultButton?: boolean;
}>;

export default function Button({
  onClick,
  disabled = false,
  type = "button",
  className,
  children,
  defaultButton = false,
  buttonSize,
}: ButtonProps) {
  const buttonStyles = classNames({
    [buttonConst.basicStyles]: true && !defaultButton,
    [buttonConst.largeButton]: buttonSize === "large",
    [buttonConst.smallSize]: buttonSize === "small",
    [buttonConst.default]: defaultButton,
    [buttonConst.disabledLarge]: disabled && buttonSize === "small",
  });

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${className} ${buttonStyles}`}
    >
      {children}
    </button>
  );
}
