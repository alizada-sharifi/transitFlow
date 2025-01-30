import React from "react";
import { Square } from "./icons";
import { cn } from "../helpers/common";
import CountUp from "react-countup";

function Number({ number, title, className }) {
  return (
    <div
      className={cn(
        "Nubmer font-Rubik flex items-center gap-3 py-4 px-8 border-y ",
        className
      )}
    >
      <CountUp
        start={0}
        end={number}
        duration={4}
        className="font-semibold text-3xl "
      />
      <Square />
      <span className="text-xl text-secondary-400">{title}</span>
    </div>
  );
}

export default Number;
