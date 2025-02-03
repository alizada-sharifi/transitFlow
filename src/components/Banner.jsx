import React from "react";
import Title from "../components/Title";
import { cn } from "../helpers/common";
import { Calender } from "./icons";
import banner from "../assets/images/aboutBanner.png";

function Banner({ title, info, className, day, month, background }) {
  return (
    <div
      className={cn("py-40 bg-center bg-cover", className)}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container">
        {title ? (
          <Title text={title} className="text-white" />
        ) : (
          <div className="flex gap-2">
            <Calender className={"stroke-white"} />
            <div className="date text-white">
              <p className="font-Rubik font-semibold text-4xl">{day}</p>
              <p className="font-medium"> {month} </p>
            </div>
          </div>
        )}
        {info && (
          <h2 className="font-Rubik font-bold text-3xl md:text-5xl mt-4 text-white">
            {info}
          </h2>
        )}
      </div>
    </div>
  );
}

export default Banner;
