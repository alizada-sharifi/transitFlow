import React from "react";

function Item2({ icon: Icon, title }) {
  return (
    <div className="my-5 flex items-center gap-2">
      <Icon />
      <span className="font-Rubik text-2xl text-secondary-400 ">{title}</span>
    </div>
  );
}

export default Item2;
