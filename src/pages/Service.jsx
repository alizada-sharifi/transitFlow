import React from "react";
import Banner from "../components/Banner";
import Container from "../components/services/Container";
import truck from "../assets/images/truck.png";
import person from "../assets/images/blog2.png";
import Title from "../components/Title";
import { Shield, Tree, Warehouse } from "../components/icons";
import Item from "../components/services/Item";
import TestmonialContainer from "../components/testmonial/TestmonialContainer";
import Number from "../components/Number";
import bannerImg from "../assets/images/serviceBanner.png";

function Service() {
  const itemsInfo = [
    {
      id: 1,
      icon: Warehouse,
      title: "Warehousing Services",
      description:
        "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking ",
    },
    {
      id: 2,
      icon: Shield,
      title: "Safety & Quality",
      description:
        "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking ",
    },
    {
      id: 3,
      icon: Tree,
      title: "Care for Environment",
      description:
        "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking ",
    },
  ];
  const numbers = [
    {
      id: 1,
      number: "24",
      title: "Our Location",
    },
    {
      id: 2,
      number: "1294",
      title: "Delivered Packages",
    },
    {
      id: 3,
      number: "3594",
      title: "Satisfied Clients",
    },
    {
      id: 4,
      number: "247",
      title: "Owned Vehicles",
    },
  ];
  return (
    <>
      <Banner
        title={"Services"}
        info={"Our Logistics Service"}
        background={bannerImg}
      />
      {/* ======== services section =========== */}
      <Container />
      {/* ========== overview section =============== */}
      <div className="my-10 bg-secondary-100 py-10">
        <div className="header text-center space-y-3 mb-8">
          <Title text={"Our Goodness"} className={"bg-secondary-50"} />
          <h2 className="font-Rubik font-semibold text-4xl">How We Works</h2>
        </div>
        <div className="container flex flex-col md:flex-row items-center gap-20 ">
          <div className="w-full md:w-1/2 relative">
            <img src={truck} alt="" />
            <img
              src={person}
              className="w-44 h-44 object-cover p-4 bg-white absolute -bottom-5 -right-8"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            {itemsInfo.map((item) => (
              <Item key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
      {/* ========== testmonial section =========== */}
      <TestmonialContainer />
      {/* ========================= */}
      <div className=" container text-center mt-10 gap-10  flex justify-center flex-wrap">
        {numbers.map((number) => (
          <Number
            key={number.id}
            {...number}
            className={"w-[45%] md:w-[22%]"}
          />
        ))}
      </div>
    </>
  );
}

export default Service;
