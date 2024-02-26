import type { SVGProps } from "react";

export default function Zod({ ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0_2708_53)">
        <path
          d="M9.57622 2.76492H30.7202L36.9159 10.9799L19.3853 35.9164L3.08167 10.9799L9.57622 2.76492Z"
          fill="#18253F"
        />
        <path
          d="M23.6348 30.0266H15.3475L11.6046 24.2071L22.2114 24.2067L22.2117 23.3811H28.2748L23.6348 30.0266Z"
          fill="#274D82"
        />
        <path
          d="M35.1367 8.63705L12.27 25.4038L9.28701 20.6644L26.9898 7.68375L26.6646 6.96828L31.3799 3.51094L35.1367 8.63705ZM22.8852 2.77321L5.71508 15.363L3.04474 11.1295L14.5408 2.7001L22.8852 2.77321Z"
          fill="#274D82"
        />
        <g filter="url(#filter0_d_2708_53)">
          <path
            d="M31.5465 0.297546H8.7716L0.450745 10.8108L19.3422 39.7023L20.8493 37.5545L39.5493 10.9098L31.5465 0.297546ZM30.7146 2.77282L36.8959 10.9699L19.3946 35.9074L3.08835 10.9699L9.57607 2.77282H30.7146Z"
            fill="black"
          />
        </g>
        <path
          d="M31.5465 0.297546H8.7716L0.450745 10.8108L19.3422 39.7023L20.8493 37.5545L39.5493 10.9098L31.5465 0.297546ZM30.7146 2.77282L36.8959 10.9699L19.3946 35.9074L3.08835 10.9699L9.57607 2.77282H30.7146Z"
          fill="black"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2708_53"
          x="0.273405"
          y="0.120206"
          width="39.5715"
          height="39.8776"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="0.0591133" dy="0.0591133" />
          <feGaussianBlur stdDeviation="0.118227" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.36 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2708_53"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2708_53"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_2708_53">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
