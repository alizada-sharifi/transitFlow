import React from "react";
import Item from "./Item";
import DarkButton from "../buttons/DarkButton";
import Title from "../Title";
import { Airplane, Board, Ship, Truck, User, Warehouse } from "../icons";
import { cn } from "../../helpers/common";
function Container({ className }) {
  const services = [
    {
      id: 1,
      icon: Ship,
      title: "Sea Transport Services",
      description:
        "Following the quality of our service thus having gained trust of our many clients.",
    },
    {
      id: 2,
      icon: Warehouse,
      title: "Warehousing Services",
      description:
        "Following the quality of our service thus having gained trust of our many clients.",
    },
    {
      id: 3,
      icon: Airplane,
      title: "Air Fright Services",
      description:
        "Following the quality of our service thus having gained trust of our many clients.",
    },
    {
      id: 4,
      icon: Board,
      title: "Project & Exhibition",
      description:
        "Following the quality of our service thus having gained trust of our many clients.",
    },
    {
      id: 5,
      icon: Truck,
      title: "Local Shipping Services",
      description:
        "Following the quality of our service thus having gained trust of our many clients.",
    },
    {
      id: 6,
      icon: User,
      title: "Customer Clearance",
      description:
        "Following the quality of our service thus having gained trust of our many clients.",
    },
  ];
  return (
    <div className={cn(" my-10 ", className)}>
      <div className="container">
        <div className="header text-center space-y-3">
          <Title text={"What We Do"} className={"bg-secondary-50"} />
          <h2 className="font-Rubik font-semibold text-secondary-400 text-2xl pb-5 md:text-4xl">
            Our Logistics Services
          </h2>
          <div className="flex flex-wrap gap-10 justify-between ">
            {services.map((item) => (
              <Item
                key={item.id}
                {...item}
                className={
                  "w-full sm:w-1/3 md:w-1/4 flex-col border-0 gap-0 text-left"
                }
              />
            ))}
          </div>
          <DarkButton className="!mt-10">More Works</DarkButton>
        </div>
      </div>
    </div>
  );
}

export default Container;
