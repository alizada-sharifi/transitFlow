import React from "react";
import { cn } from "../../helpers/common";

function Textarea({ className, placeholder }) {
  return (
    <textarea
      name={name}
      className={cn(
        "mt-4 w-full bg-transparent border  border-primary-400 h-40 outline-none text-white py-4 px-2",
        className
      )}
      placeholder={placeholder}
    />
  );
}

export default Textarea;
