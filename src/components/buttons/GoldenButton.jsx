import React, { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../helpers/common";
import bg from "../../assets/images/golden-btn-bg.png";
import hoverBg from "../../assets/images/hover-golden.png";

function GoldenButton({ className = "", type = "button", to, children = "" }) {
  const [bgImage, setBgImage] = useState(bg);

  return to ? (
    <Link
      to={to}
      className={cn(
        "font-extrabold text-secondary-200 bg-center bg-cover py-4 px-6 font-Krub transition-all ease-in-out duration-300 inline-block",
        className
      )}
      style={{ backgroundImage: `url(${bgImage})` }}
      onMouseEnter={() => setBgImage(hoverBg)}
      onMouseLeave={() => setBgImage(bg)}
    >
      {children}
    </Link>
  ) : (
    <button
      type={type}
      className={cn(
        "font-extrabold text-secondary-200 bg-center bg-cover py-4 px-6 font-Krub transition-all ease-in-out duration-300",
        className
      )}
      style={{ backgroundImage: `url(${bgImage})` }}
      onMouseEnter={() => setBgImage(hoverBg)}
      onMouseLeave={() => setBgImage(bg)}
    >
      {children}
    </button>
  );
}

export default GoldenButton;
