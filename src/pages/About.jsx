import React from "react";
import Banner from "../components/Banner";
import truck from "../assets/images/truck.png";
import employee from "../assets/images/employee.png";
import person from "../assets/images/blog2.png";
import Title from "../components/Title";
import DarkButton from "../components/buttons/DarkButton";
import Item from "../components/services/Item";
import team1 from "../assets/images/team1.png";
import team2 from "../assets/images/team2.png";
import team3 from "../assets/images/team3.png";
import TeamItem from "../components/TeamItem";
import TestmonialContainer from "../components/testmonial/TestmonialContainer";
import HeadingItem from "../components/layout/website/HeadingItem";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import {
  Airplane,
  Board,
  Phone,
  Ship,
  Truck,
  User,
  Warehouse,
} from "../components/icons";
import PriceCard from "../components/PriceCard";
import GoldenButton from "../components/buttons/GoldenButton";
import FaqItem from "../components/FaqItem";
function About() {
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
  const teamsInfo = [
    {
      id: 1,
      pic: team1,
      name: "Jessca Arow",
      job: "Warehouse Head",
    },
    {
      id: 2,
      pic: team2,
      name: "Kathleen Smith",
      job: "Transport Manager",
    },
    {
      id: 3,
      pic: team3,
      name: "Rebecca Tylor",
      job: "Cargo Head",
    },
  ];
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
  const faqInfo = [
    {
      id: 1,
      title: "How can I pay for your logistics services?",
      desc: "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive.",
    },
    {
      id: 2,
      title: "What payment methods are supported?",
      desc: "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive.",
    },
    {
      id: 3,
      title: "What options for logistics plans are available?",
      desc: "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive.",
    },
    {
      id: 4,
      title: "Can i specify a delivery date when ordering?",
      desc: "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive.",
    },
  ];
  return (
    <>
      <Banner title={"About Us"} info={"About Our Logistics"} />
      {/* ========== overview section =============== */}
      <div className="container flex flex-col md:flex-row items-center gap-10 my-10">
        <div className="w-full md:w-1/2 relative">
          <img src={truck} alt="" />
          <img
            src={person}
            alt=""
            className="w-44 h-44 object-cover p-4 bg-white absolute -bottom-5 -right-10"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <Title className={"bg-secondary-50"} text={"About Us"} />
          <h3 className="font-Rubik font-semibold text-3xl text-secondary-400x">
            Our Company Overview
          </h3>
          <p className="font-Krub font-medium text-secondary-250">
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value
            proposition.
          </p>
          <div className="flex flex-wrap font-Krub font-semibold text-lg gap-3 justify-center">
            <span className="text-white bg-golden py-4 px-8">Our Approch</span>
            <span className="text-secondary-400 bg-secondary-100 py-4 px-8">
              Our Approch
            </span>
            <span className="text-secondary-400 bg-secondary-100 py-4 px-8">
              Our Approch
            </span>
          </div>
          <p className="font-Krub font-medium text-secondary-250">
            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt, explicabo. Nemo enim ipsam voluptatem quia voluptassit.
          </p>
          <DarkButton to={""}>Learn More</DarkButton>
        </div>
      </div>
      {/* ======== services section =========== */}
      <div className="bg-secondary-100 my-10 py-10">
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
      {/* ========= team section =========== */}
      <div className="container my-10 ">
        <div className="header text-center space-y-3 mb-4">
          <Title className={"bg-secondary-50"} text={"The Transporters"} />
          <h2 className="font-Rubik font-semibold text-3xl text-secondary-400">
            Meet Expert Team
          </h2>
        </div>
        <div className="teamMembers flex flex-wrap  justify-center gap-6 items-center">
          {teamsInfo.map((item) => (
            <TeamItem key={item.id} {...item} />
          ))}
        </div>
      </div>
      {/* ============ testmonial section ======== */}
      <div className="bg-secondary-100 my-10">
        <TestmonialContainer />
      </div>
      {/* =========== pricing section ========== */}
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
      {/* ============ FAQ section ============= */}
      <div className="bg-secondary-100 my-10 py-8">
        <div className="container flex flex-col md:flex-row ">
          <div className=" w-full md:w-1/2">
            <Title className={"bg-secondary-50"} text={"FAQ"} />
            <h2 className="font-Rubik font-semibold text-xl md:text-3xl text-secondary-400 mt-2 md:w-1/2 ">
              Frequently Asked Questions
            </h2>
            {faqInfo.map((item) => (
              <FaqItem key={item.id} {...item} />
            ))}
          </div>
          <div className="w-full md:w-1/2 relative justify-items-end items-center  ">
            <img
              src={employee}
              alt=""
              className="w-3/4 h-full object-cover hidden md:block "
            />
            <div className="bg-primary py-4 px-3 text-white space-y-4 md:absolute top-1/4 left-10 md:w-1/2">
              <Title className={"text-white"} text={"Let's Talk"} />
              <h2 className="font-Rubik font-medium text-xl">
                You need any help? get free consultation
              </h2>
              <HeadingItem
                icon={Phone}
                para1={"Have Any Questions"}
                para2={"(00) 112 365 489"}
              />
              <GoldenButton>Contact Us</GoldenButton>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap my-10 container">
        <img src={img1} alt="" className="w-1/2 md:w-1/4" />
        <img src={img2} alt="" className="w-1/2 md:w-1/4" />
        <img src={img3} alt="" className="w-1/2 md:w-1/4" />
        <img src={img4} alt="" className="w-1/2 md:w-1/4" />
      </div>
    </>
  );
}

export default About;
