import React from "react";
import { cn } from "../helpers/common";

function PriceCard({ className, title, price, button }) {
  return (
    <div
      className={cn(
        "card py-8 px-8 text-center font-Rubik w-full sm:w-[45%] md:w-[31%]",
        className
      )}
    >
      <h4 className=" font-medium text-3xl">{title}</h4>
      <div className="py-8">
        <span className="font-medium text-6xl">${price}</span>
        <span> /month</span>
      </div>
      <ul className="mb-8">
        <li className="text-xl py-2 border-y border-secondary-150  ">Single Truck</li>
        <li className="text-xl py-2 border-y border-secondary-150 ">Single Truck</li>
        <li className="text-xl py-2 border-y border-secondary-150 ">Single Truck</li>
        <li className="text-xl py-2 border-y border-secondary-150 ">Single Truck</li>
      </ul>
      {button}
    </div>
  );
}

export default PriceCard;
