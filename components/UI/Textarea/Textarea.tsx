import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import Typography from "../Typo/Typography";

interface TextAreaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  classes?: string;
  name: string;
  label?: string;
  errorMessage?: string;
  isError?: boolean;
}

export default function Textarea({
  errorMessage,
  label,
  name,
  isError,
  classes,
  ...rest
}: TextAreaProps) {
  return (
    <div className={`${classes}`}>
      <label className="pl-8px text-16 uppercase font-semibold" htmlFor={name}>
        {label}
      </label>
      <textarea
        id={name}
        className={
          "resize-none w-full text-[15px] font-medium  leading-24 pt-8px  px-8px h-[100px] text-[#fff] bg-black_1 leading-6 outline-none rounded-[16px]"
        }
        name={name}
        {...rest}
      />
      {isError && (
        <Typography type="defaultP" color="text-error" text={errorMessage} />
      )}
    </div>
  );
}
