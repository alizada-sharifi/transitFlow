import React from "react";
import { Square } from "./icons";
import { cn } from "../helpers/common";
import CountUp from "react-countup";

function Number({ number, title, className }) {
  return (
    <div
      className={cn(
        "Nubmer font-Rubik flex items-center gap-2 p-1 border-y ",
        className
      )}
    >
      <CountUp
        start={0}
        end={number}
        duration={4}
        className="font-semibold text-2xl "
      />
      <Square />
      <span className="text-lg text-secondary-400">{title}</span>
    </div>
  );
}

export default Number;
