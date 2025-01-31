import React from "react";

function Coin() {
  return (
    <svg
      width="63"
      height="63"
      viewBox="0 0 63 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="31.5" cy="31.5" r="31.5" fill="url(#paint0_linear_1_4246)" />
      <path
        d="M32 42C38.0751 42 43 37.0751 43 31C43 24.9249 38.0751 20 32 20C25.9249 20 21 24.9249 21 31C21 37.0751 25.9249 42 32 42Z"
        stroke="#1C1F35"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M32 25V31H39"
        stroke="#1C1F35"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_4246"
          x1="-1.78608"
          y1="13.65"
          x2="77.4684"
          y2="19.2782"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFB629" />
          <stop offset="0.507189" stop-color="#FFDA56" />
          <stop offset="1" stop-color="#FFD7A6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Coin;
