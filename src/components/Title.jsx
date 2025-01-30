import React from "react";
import { cn } from "../helpers/common";

function Title({ text, className }) {
  return (
    <span
      className={cn(
        "text-sm bg-secondary-300 bg-opacity-50 p-1 border-l-4 border-golden capitalize font-Rubik",
        className
      )}
    >
      {text}
    </span>
  );
}

export default Title;
