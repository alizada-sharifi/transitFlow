import React from "react";
import { cn } from "../../helpers/common";
import { Link } from "react-router-dom";

function Item({ icon: Icon, title, description, className, iconClassName }) {
  return (
    <div className={cn("flex gap-4", className)}>
      <Icon className={cn("", iconClassName)} />
      <div>
        <Link className="font-Rubik text-2xl text-secondary-400 hover:text-golden mt-1 ">
          {title}
        </Link>
        <p className="font-Krub font-medium text-secondary-250 mt-3">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Item;
