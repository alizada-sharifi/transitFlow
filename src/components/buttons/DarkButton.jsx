import React, { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../helpers/common";
import bg from "../../assets/images/darkBtn.png";
import hoverBg from "../../assets/images/hover-dark.png";

function DarkButton({ className = "", type = "button", to, children = "" }) {
  const [bgImage, setBgImage] = useState(bg);

  return to ? (
    <Link
      to={to}
      className={cn(
        `font-extrabold text-white bg-center bg-cover py-4 font-Krub transition-all ease-in-out duration-300 px-10 inline-block`,
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
        "font-extrabold text-white bg-center bg-cover py-4 font-Krub transition-all ease-in-out duration-300 px-10 inline-block",
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

export default DarkButton;
