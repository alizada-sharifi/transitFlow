import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../../helpers/common";

function GoldenButton({ className = "", type = "button", to, children = "" }) {
  return to ? (
    <Link
      to={to}
      className={cn(
        "font-extrabold bg-golden-btnBg bg-center bg-cover py-4 px-6 hover:bg-hover-golden text-secondary-200 font-Krub transition-all ease-in-out duration-300 inline-block" ,
        className
      )}
    >
      {children}
    </Link>
  ) : (
    <button
      type={type}
      className={cn(
        "font-extrabold bg-golden-btnBg bg-center bg-cover py-4 px-6 hover:bg-hover-golden text-secondary-200 font-Krub transition-all ease-in-out duration-300",
        className
      )}
    >
      {children}
    </button>
  );
}

export default GoldenButton;
