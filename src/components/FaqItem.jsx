import React, { useState } from "react";
import { ArrowDown, ToggleRight } from "./icons";

function FaqItem({ title, desc }) {
  let [isClose, setIsClose] = useState(true);
  return (
    <div className="my-6">
      <div
        className="title flex items-center justify-between pb-3 cursor-pointer"
        onClick={() => setIsClose(!isClose)}
      >
        <h4 className="font-Rubik text-base md:text-xl ">{title}</h4>
        {isClose ? <ToggleRight /> : <ArrowDown className={"stroke-golden"} />}
      </div>
      {isClose ? (
        ""
      ) : (
        <p className="font-Krub font-medium text-sm text-secondary-250 text-justify">
          {desc}
        </p>
      )}
    </div>
  );
}

export default FaqItem;
