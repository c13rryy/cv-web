import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface InputTypes
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  isError?: boolean;
  errorMessage?: string;
  label?: string;
  classes?: string;
  name: string;
  id: string;
}

export default function Input({
  label,
  isError,
  errorMessage,
  name,
  classes,
  id,
  ...rest
}: InputTypes) {
  return (
    <div className={`${classes}`}>
      <label className="pl-8px text-16 uppercase font-semibold" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className="p-8px w-full text-[#fff] text-[15px] font-medium  outline-none rounded-[16px] border-[1px] border-solid border-[#fff] bg-black_1"
        name={name}
        {...rest}
      />

      {isError && (
        <p className="px-24px pt-4px text-12 font-medium leading-16 text-error">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
