import * as React from "react";
import { SVGProps } from "react";
const Close = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="-0.5 0 25 25"
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path d="m3 21.32 18-18M3 3.32l18 18" />
    </g>
  </svg>
);
export default Close;
