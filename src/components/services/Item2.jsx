import React from "react";
import { cn } from "../../helpers/common";

function Item2({ icon: Icon, title, className }) {
  return (
    <div className={cn("my-5 flex  items-center gap-2", className)}>
      <Icon />
      <span className="font-Rubik text-xl text-secondary-400 ">{title}</span>
    </div>
  );
}

export default Item2;
