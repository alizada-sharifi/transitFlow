import React from "react";
import { Quotation, Star } from "../icons";
function Item({ background, name, pic, company, desc, color }) {
  return (
    <div className={`card w-full py-14 px-16  ${background}`}>
      <div className="header flex items-center justify-between">
        <div className="info  flex items-center gap-3">
          <img
            src={pic}
            alt={name}
            className="w-20 h-20 rounded-full object-cover"
          />
          <div className="text-primary font-medium">
            <p className="font-Rubik  text-xl">{name}</p>
            <span className="font-Krub  text-base">{company}</span>
          </div>
        </div>
        <Quotation />
      </div>
      <p className={`description font-Krub font-medium italic my-6 ${color}`}>
        {desc}
      </p>
      <div className="rate flex gap-1">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
    </div>
  );
}

export default Item;
