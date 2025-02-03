import React from "react";
import Banner from "../components/Banner";
import Title from "../components/Title";
import TeamItem from "../components/TeamItem";
import team1 from "../assets/images/team1.png";
import team2 from "../assets/images/team2.png";
import team3 from "../assets/images/team3.png";
import team4 from "../assets/images/team4.png";
import team5 from "../assets/images/team5.png";
import team6 from "../assets/images/team6.png";
import multiTruck from "../assets/images/multiTruck.jpeg";
import person from "../assets/images/blog5.png";
import Item from "../components/services/Item";
import { Hourglass, User2 } from "../components/icons";
import bannerImg from "../assets/images/teamBanner.png";

function Team() {
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
    {
      id: 4,
      pic: team4,
      name: "Ria Jackson",
      job: "Operational Head",
    },
    {
      id: 5,
      pic: team5,
      name: "Kane William",
      job: "Country Head",
    },
    {
      id: 6,
      pic: team6,
      name: "Lisara Tylor",
      job: "Finance Manager",
    },
  ];
  const itemsInfo = [
    {
      id: 1,
      title: "Our Vission",
      description:
        "Leverage agile frameworks to provide a robust synopsis for strategy foster.",
      icon: User2,
      isLink: false,
    },
    {
      id: 2,
      title: "Estimate Shipping",
      description:
        "Leverage agile frameworks to provide a robust synopsis for strategy foster.",
      icon: Hourglass,
      isLink: false,
    },
  ];
  return (
    <>
      <Banner title={"team"} info={"Our Team"} background={bannerImg} />
      {/* ========= team section =========== */}
      <div className="bg-secondary-100  mb-10 py-10">
        <div className="container ">
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
      </div>
      {/* ========== overview section =============== */}

      <div className="container flex flex-col md:flex-row items-center gap-20 my-10 ">
        <div className="w-full md:w-1/2 relative">
          <img src={multiTruck} alt="" />
          <img
            src={person}
            className="w-44 h-44 object-cover p-4 bg-white absolute -bottom-5 -right-8"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <Title text={"About"} className={"bg-secondary-150"} />
          <h2 className="font-Rubik font-semibold text-2xl md:text-4xl text-secondary-400 ">
            Why Choose Us
          </h2>
          <p className="font-medium text-secondary-250 pb-3 border-b border-secondary-150">
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value
            proposition.
          </p>
          <div className="flex flex-col md:flex-row gap-10">
            {itemsInfo.map((item) => (
              <Item {...item} className={"flex-col"} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
