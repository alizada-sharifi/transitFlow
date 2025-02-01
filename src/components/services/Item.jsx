import React from "react";
import { cn } from "../../helpers/common";
import { Link } from "react-router-dom";

function Item({
  icon: Icon,
  title,
  description,
  className,
  iconClassName,
  id,
  isLink = true,
  linkTo,
}) {
  const linkPath = linkTo || `/serviceDetail/${id}`;

  return (
    <div className={cn("flex gap-4", className)}>
      <Icon className={cn("", iconClassName)} />
      <div>
        {isLink ? (
          <Link
            className="font-Rubik text-2xl text-secondary-400 hover:text-golden mt-1"
            to={linkPath}
          >
            {title}
          </Link>
        ) : (
          <h3 className="font-Rubik text-2xl text-secondary-400 mt-1">
            {title}
          </h3>
        )}
        <p className="font-Krub font-medium text-secondary-250 mt-3">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Item;
