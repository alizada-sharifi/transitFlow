import React from "react";
import PriceCard from "./PriceCard";
import Title from "../Title";
import DarkButton from "../buttons/DarkButton";
import GoldenButton from "../buttons/GoldenButton";

function PriceContainer() {
  const priceInfo = [
    {
      id: 1,
      title: "Basic",
      price: "40",
      button: <DarkButton>Choose plan</DarkButton>,
      className: "bg-secondary-100 , text-secondary-400",
    },
    {
      id: 2,
      title: "Standard",
      price: "59",
      button: <GoldenButton>Choose plan</GoldenButton>,
      className: "bg-primary , text-white",
    },
    {
      id: 1,
      title: "Premium",
      price: "89",
      button: <DarkButton>Choose plan</DarkButton>,
      className: "bg-secondary-100 , text-secondary-400",
    },
  ];
  return (
    <div className=" container my-10">
      <div className="header text-center space-y-3 mb-6">
        <Title text={"Pricing"} className={"bg-secondary-50"} />
        <h2 className="font-Rubik font-semibold text-4xl text-secondary-400">
          Our Best Pricing
        </h2>
      </div>
      <div className="flex  justify-center flex-wrap gap-4  ">
        {priceInfo.map((item) => (
          <PriceCard {...item} />
        ))}
      </div>
    </div>
  );
}

export default PriceContainer;
