import React from "react";
import pic from "../assets/images/blog1.png";
import { Calender } from "./icons";
import { Link } from "react-router-dom";
import { cn } from "../helpers/common";
function BlogItem({ className, title, day, month }) {
  return (
    <div
      className={cn(
        "card flex flex-col md:flex-row gap-6 border-y border-secondary-150 py-4",
        className
      )}
    >
      <div className="w-full md:w-1/2 flex gap-6 md:border-r border-secondary-150 ">
        <div className="relative w-2/3 group  ">
          <img src={pic} alt="" className=" object-cover h-full" />
          <div className="bg-secondary-400 bg-opacity-90 absolute w-5/6 top-1/4 py-10 md:py-20 left-6 hidden group-hover:flex items-center justify-center  ">
            <Link className="text-white font-Krub font-semibold hover:text-golden">
              Read More
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Calender />
          <span className="font-Rubik font-semibold text-5xl text-secondary-400">
            {day}
          </span>
          <p className="font-Krub font-medium text-base text-secondary-250">
            {month}
          </p>
        </div>
      </div>
      <div className=" w-full md:w-1/3">
        <h2 className="font-Rubik text-2xl text-secondary-400 hover:text-golden">
          {title}
        </h2>
        <p className="font-Krub font-medium text-secondary-250 my-4">
          We are dedicated in creating added value for our customers by
          implementing modern technology in our work.
        </p>
        <ul className="font-Krub font-medium text-secondary-400 list-disc ml-4">
          <li>Urgent transport solutions</li>
          <li>Reliable & experienced staffs</li>
          <li>Urgent transport solutions </li>
          <li>Reliable & experienced staffs</li>
        </ul>
      </div>
    </div>
  );
}

export default BlogItem;
