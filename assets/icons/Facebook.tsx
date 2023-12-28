import type { SVGProps } from "react";

export default function Facebook({ ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <rect width="32" height="32" rx="16" fill="white" />
      <path
        d="M17.243 24.3337V16.7318H19.699L20.0674 13.7683H17.243V11.8765C17.243 11.0188 17.4714 10.4343 18.6571 10.4343L20.1668 10.4337V7.78302C19.9057 7.74778 19.0095 7.66699 17.9664 7.66699C15.7882 7.66699 14.2969 9.0478 14.2969 11.583V13.7683H11.8335V16.7318H14.2969V24.3337H17.243Z"
        fill="black"
      />
    </svg>
  );
}
