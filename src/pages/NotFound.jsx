import React from "react";
import DarkButton from "../components/buttons/DarkButton";

function NotFound() {
  return (
    <div className="my-20 flex flex-col items-center justify-center">
      <h1 className="font-Rubik font-semibold text-6xl md:text-9xl text-secondary-400">
        4<span className="text-golden">0</span>4
      </h1>
      <div className="text-center">
        <h4 className="font-Rubik font-semibold text-xl md:text-2xl text-secondary-400">
          Oops! Page not found.
        </h4>
        <h5 className="font-Krub font-medium text-secondary-250 text-xs md:text-sm my-2">
          Let’s get you to where you need to be.
        </h5>
        <DarkButton to={"/"}>Back to home</DarkButton>
      </div>
    </div>
  );
}

export default NotFound;
