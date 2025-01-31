import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../../helpers/common";

function DarkButton({ className = "", type = "button", to, children = "" }) {
  return to ? (
    <Link
      to={to}
      className={cn(
        "font-extrabold bg-darkBtn text-white bg-center bg-cover py-4  hover:bg-hover-dark  font-Krub transition-all ease-in-out duration-300 px-10 inline-block",
        className
      )}
    >
      {children}
    </Link>
  ) : (
    <button
      type={type}
      className={cn(
        "font-extrabold bg-darkBtn text-white bg-center bg-cover py-4  hover:bg-hover-dark  font-Krub transition-all ease-in-out duration-300 px-10 inline-block",
        className
      )}
    >
      {children}
    </button>
  );
}

export default DarkButton;
