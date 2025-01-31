import React from "react";
import GoldenButton from "../components/buttons/GoldenButton";
import Item from "../components/services/Item";
import airplane from "../assets/images/airplane.jpeg";
import airplane2 from "../assets/images/airplane2.jpeg";
import canteen from "../assets/images/canteen.jpg";
import team1 from "../assets/images/team1.png";
import team2 from "../assets/images/team2.png";
import team3 from "../assets/images/team3.png";
import sea from "../assets/images/sea.png";
import {
  Ship,
  Airplane,
  Truck,
  Warehouse,
  Money,
  Cube,
  Globe,
  Ship2,
  Headphone,
  Clock2,
  Coin,
  Travel,
} from "../components/icons";
import Title from "../components/Title";
import Item2 from "../components/services/Item2";
import Number from "../components/Number";
import image1 from "../assets/images/1.png";
import image2 from "../assets/images/2.png";
import image3 from "../assets/images/3.png";
import image4 from "../assets/images/4.png";
import image5 from "../assets/images/5.png";
import DarkButton from "../components/buttons/DarkButton";
import TestmonialContainer from "../components/testmonial/TestmonialContainer";
import TeamItem from "../components/TeamItem";
import Container from "../components/contact/Container";
import BlogItem from "../components/BlogItem";
import blog1 from "../assets/images/blog1.png";
import blog2 from "../assets/images/blog2.png";
import blog3 from "../assets/images/blog3.png";

function Home() {
  const ServicesInfo = [
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
      icon: Truck,
      title: "Local Shipping Services",
      description:
        "Following the quality of our service thus having gained trust of our many clients.",
    },
  ];
  const images = [
    {
      id: 1,
      image: image1,
    },
    {
      id: 2,
      image: image2,
    },
    {
      id: 3,
      image: image3,
    },
    {
      id: 4,
      image: image4,
    },
    {
      id: 5,
      image: image5,
    },
  ];
  const services = [
    {
      id: 1,
      icon: Cube,
      title: "Safe Package",
    },
    {
      id: 2,
      icon: Ship2,
      title: "Ship Everyware",
    },
    {
      id: 3,
      icon: Globe,
      title: "Global Tracking",
    },
    {
      id: 4,
      icon: Headphone,
      title: "24/7 Support",
    },
    {
      id: 5,
      icon: Clock2,
      title: "In Time Delivery",
    },
    {
      id: 6,
      icon: Coin,
      title: "Transparant Pricing",
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
  const blogInfo = [
    {
      id: 1,
      pic: blog1,
      day: "08",
      month: "September",
      title: "Inland freight a worthy solution for your business",
    },
    {
      id: 2,
      pic: blog2,
      day: "12",
      month: "October",
      title: "How technology can help redraw the supply chain map",
    },
    {
      id: 3,
      pic: blog1,
      day: "25",
      month: "March",
      title: "Five things you should have ready for your broker",
    },
  ];
  return (
    <>
      {/* ========== banner section ============= */}
      <div className="bg-home-bg !bg-cover bg-center  ">
        <div className="container text-center md:text-left my-20 ">
          <div className=" w-full md:w-1/2 font-Rubik text-white">
            <Title text={"Logistics & Supply Chain Solutions"} />
            <h1 className="font-bold text-2xl md:text-4xl lg:text-6xl py-4">
              Your Gateway to any Destination in the World
            </h1>
            <p className="font-medium font-Krub">
              In augue ligula, feugiat ut nulla consequat. Ut est lacus,
              molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl
              id dapibus finibus, enim diam interdum nulla, sed laoreet risus
              lectus.
            </p>
            <GoldenButton className={"my-4"}>Explore more</GoldenButton>
          </div>
        </div>
      </div>
      {/* ============= services section =============== */}
      <div className="container my-10 flex  flex-col gap-y-8 md:flex-row justify-between">
        <div className=" w-full  md:w-3/12 font-Rubik">
          <Title text={"What we Do"} className={"bg-secondary-50"} />
          <h3 className="font-semibold text-4xl mt-4">
            Safe & Reliable Cargo Solutions
          </h3>
        </div>
        <div className=" w-full md:w-8/12 flex  flex-wrap gap-y-16">
          {ServicesInfo.map((item) => (
            <Item key={item.id} {...item} iconClassName={"w-1/4"} className={"w-full md:w-1/2"} />
          ))}
        </div>
      </div>
      {/* =================== canteen section ============== */}
      <img src={canteen} alt="" />
      <div className=" container  pt-8 mb-10 flex justify-between flex-col items-center gap-y-8 md:flex-row ">
        <div className="info w-full lg:w-1/2">
          <Title text={"why us"} className={"bg-secondary-50"} />
          <h2 className="font-Rubik font-semibold text-2xl md:text-4xl text-secondary-400 my-4 ">
            We provide full range global logistics solution
          </h2>
          <p className="font-Krub font-medium text-secondary-250 my-4 ">
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value
            proposition.
          </p>
          <p className="font-Krub font-medium text-secondary-250 my-4 ">
            Organically grow the holistic world view of disruptive innovation
            via workplace diversity and empowerment.
          </p>

          <div>
            <Item2 title={"Delivery on Time"} icon={Cube} />
            <Item2 title={"Optimized Travel Cost"} icon={Money} />
          </div>
        </div>
        <div className="photo w-full lg:w-1/2 relative ">
          <img src={airplane} alt="" className="w-96 mx-auto" />
          <div className="bg-white p-3 absolute top-40 left-16">
            <img src={airplane} alt="" className="w-52" />
          </div>
        </div>
      </div>
      <div className=" container text-center mt-24 mb-10 md:mt-0 my-6 flex justify-center flex-col md:flex-row">
        <Number number={"1294"} title={"Delivered Packages"} />
        <Number number={"3594"} title={"Satisfied Clients"} />
      </div>
      {/* =================== */}
      <div className="bg-custom-gradient my-10 py-8">
        <h2 className="font-Rubik font-semibold text-xl md:text-4xl text-secondary-400 text-center mb-3 ">
          Transporting Across The World
        </h2>
        <div className="container text-center">
          <div className=" flex flex-wrap gap-y-4 py-3 justify-center gap-4 items-center">
            {images.map((img) => (
              <img
                src={img.image}
                key={img.id}
                className=" w-3/12 md:w-2/12 rounded-md"
              />
            ))}
          </div>
          <DarkButton to={"/about"} className="mt-6   ">
            More Work
          </DarkButton>
        </div>
      </div>
      {/* ============ testmonial section ======== */}
      <TestmonialContainer />
      {/* ================================== */}
      <div className="flex my-10 flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-primary py-8 px-4">
          <img src={airplane2} alt="airplane" className="w-4/5 mx-auto" />
          <p className="bg-custom-gradient p-2 md:p-4 flex w-4/5 mx-auto items-center gap-2 ">
            <Travel />
            <span className="font-Rubik text-sm md:text-xl w-2/3">
              Moving your products across borders
            </span>
          </p>
        </div>
        <div className=" w-full md:w-1/2 bg-secondary-100 py-8 ">
          <div className="  container  text-left">
            <Title text={"Why Choose"} className={"bg-secondary-50"} />
            <h2 className="font-Rubik font-semibold mt-4 text-xl md:text-4xl">
              We create opportunity to reach potential
            </h2>
            <p className="font-Krub font-medium text-secondary-250 my-4">
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition.
            </p>
            <div className="flex flex-wrap">
              {services.map((service) => (
                <Item2
                  className={"w-full md:w-1/2 my-2"}
                  key={service.id}
                  {...service}
                />
              ))}
            </div>
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
      {/* ===========contact section ========== */}
      <Container />
      {/* ============ Blog section =========== */}
      <div className="container my-10 text-center">
        <div className="header ">
          <Title className={"bg-secondary-50 "} text={"Our Blog"} />
          <h2 className="mt-3 mb-6 font-Rubik font-semibold text-3xl text-secondary-400">
            Our Latest News
          </h2>
        </div>
        {blogInfo.map((blog) => (
          <BlogItem key={blog.id} {...blog} />
        ))}
        <DarkButton to={"/blog"} className="mt-6 ">
          More Blog
        </DarkButton>
      </div>
      <img src={sea} alt="sea" className="mt-10" />
    </>
  );
}

export default Home;
