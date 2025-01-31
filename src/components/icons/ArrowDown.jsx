import React from "react";

function ArrowDown({ className }) {
  return (
    <svg
      width="20"
      height="10"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L5 5L9 1"
        className={className}
        strokeWidth="1.5"
        strokelinecap="round"
        strokeinejoin="round"
      />
    </svg>
  );
}

export default ArrowDown;
