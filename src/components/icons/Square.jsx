import React from "react";

function Square() {
  return (
    <svg
      width="18"
      height="17"
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" width="17" height="17" fill="url(#paint0_linear_1_4448)" />
      <defs>
        <linearGradient
          id="paint0_linear_1_4448"
          x1="0.0180415"
          y1="3.68333"
          x2="21.4042"
          y2="5.20206"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFB629" />
          <stop offset="0.507189" stopColor="#FFDA56" />
          <stop offset="1" stopColor="#FFD7A6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Square;
