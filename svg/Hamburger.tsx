import * as React from "react";
import { SVGProps } from "react";
const Hamburger = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M2 12.32h20M2 18.32h20M2 6.32h20" />
    </g>
  </svg>
);
export default Hamburger;
