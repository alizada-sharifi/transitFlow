import React from "react";
import { cn } from "../../helpers/common";

function Item({ icon: Icon, title, description, className }) {
  return (
    <div className={cn("flex gap-4 w-full md:w-1/2", className)}>
      <Icon className="w-1/4" />
      <div className={cn(" pl-3 border-l border-secondary-150", className)}>
        <h4 className="font-Rubik text-2xl text-secondary-400 ">{title}</h4>
        <p className="font-Krub font-medium text-secondary-250 mt-3">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Item;
