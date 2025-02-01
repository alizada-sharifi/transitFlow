import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../../helpers/common";

function GoldenButton({ className = "", type = "button", to, children = "" }) {
  const buttonClass = cn(
    "font-extrabold bg-golden-btnBg bg-center bg-cover py-4 px-6 hover:bg-hover-golden text-secondary-200 font-Krub transition-all ease-in-out duration-300",
    className
  );

  return to ? (
    <Link to={to} className={buttonClass}>
      {children}
    </Link>
  ) : (
    <button type={type} className={buttonClass}>
      {children}
    </button>
  );
}

export default GoldenButton;
