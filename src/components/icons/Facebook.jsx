import React from "react";
import { cn } from "../../helpers/common";

function Facebook({ className }) {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.4065 10.0578C21.4065 4.74704 16.8092 0.440918 11.1393 0.440918C5.4694 0.440918 0.87207 4.74704 0.87207 10.0578C0.87207 14.8576 4.62602 18.8362 9.53503 19.5583V12.8385H6.92743V10.0578H9.53503V7.93907C9.53503 5.52927 11.0682 4.19708 13.4132 4.19708C14.5366 4.19708 15.7119 4.38512 15.7119 4.38512V6.75199H14.4165C13.1418 6.75199 12.7431 7.49301 12.7431 8.25463V10.0578H15.5904L15.1357 12.8385H12.7435V19.5592C17.6525 18.8375 21.4065 14.8589 21.4065 10.0578Z"
        className={cn("fill-white", className)}
      />
    </svg>
  );
}

export default Facebook;
