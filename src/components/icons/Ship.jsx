import React from "react";
import { cn } from "../../helpers/common";

function Ship({ className }) {
  return (
    <svg
      width="52"
      height="56"
      viewBox="0 0 52 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
    >
      <path
        d="M25.6602 7.16494V1"
        stroke="#1C1F35"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50.3195 35.9345C46.5692 49.035 29.2046 53.6073 26.1221 54.3265C25.8187 54.4037 25.5008 54.4037 25.1974 54.3265C22.1149 53.6073 4.75034 49.035 1 35.9345V27.1494C0.999964 26.7167 1.13652 26.295 1.39021 25.9445C1.64389 25.594 2.00176 25.3324 2.4128 25.1972L25.0176 17.6452C25.436 17.5164 25.8835 17.5164 26.3019 17.6452L48.9067 25.1972C49.3178 25.3324 49.6756 25.594 49.9293 25.9445C50.183 26.295 50.3195 26.7167 50.3195 27.1494V35.9345Z"
        stroke="#1C1F35"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.1271 47.6652C23.6883 47.1036 9.94964 43.5341 6.98242 33.3066"
        stroke="#1C1F35"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.98242 9.98267V23.136L25.5288 16.555L44.0752 23.136V9.98267C44.0752 8.32581 42.7321 6.98267 41.0752 6.98267H9.98242C8.32557 6.98267 6.98242 8.32581 6.98242 9.98267Z"
        fill="#FFD550"
        stroke="#1C1F35"
        strokeWidth="2"
      />
      <path
        d="M25.6602 37.9898V17.5427"
        stroke="#1C1F35"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.9141 36.8963L30.9141 28.5205"
        stroke="#1C1F35"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.7686 17.7515V11.7688"
        stroke="#1C1F35"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M48.8613 20.1446V9.37573"
        stroke="#1C1F35"
        strokeWidth="2"
        strokeLinecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default Ship;
