import React from "react";
import GoldenButton from "../components/buttons/GoldenButton";
import Item from "../components/services/Item";
import airplane from "../assets/images/airplane.jpeg";
import canteen from "../assets/images/canteen.jpg";
import {
  Ship,
  Airplane,
  Truck,
  Warehouse,
  Money,
  Cube,
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
import Container from "../components/testmonial/Container";

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
  return (
    <>
      {/* ========== banner section ============= */}
      <div className="bg-home-bg !bg-cover bg-center  ">
        <div className="container text-center md:text-left my-20 ">
          <div className=" w-full md:w-1/3 font-Rubik text-white">
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
            <GoldenButton className={"my-4"} />
          </div>
        </div>
      </div>
      {/* ============= services section =============== */}
      <div className="container my-14 flex  flex-col gap-y-8 md:flex-row justify-between">
        <div className=" w-full  md:w-3/12 font-Rubik">
          <Title text={"What we Do"} className={"bg-secondary-50"} />
          <h3 className="font-semibold text-4xl mt-4">
            Safe & Reliable Cargo Solutions
          </h3>
        </div>
        <div className=" w-full md:w-8/12 flex  flex-wrap gap-y-16">
          {ServicesInfo.map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </div>
      </div>
      {/* =================== canteen section ============== */}
      <img src={canteen} alt="" />
      <div className=" container py-4 flex justify-between flex-col items-center gap-y-8 md:flex-row ">
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
      <div className=" container text-center mt-24 md:mt-0 my-6 flex justify-center flex-col md:flex-row">
        <Number number={"1294"} title={"Delivered Packages"} />
        <Number number={"3594"} title={"Satisfied Clients"} />
      </div>
      {/* =================== */}
      <div className="bg-custom-gradient py-8">
        <h2 className="font-Rubik font-semibold text-xl md:text-4xl text-secondary-400 text-center mb-3 ">
          Transporting Across The World
        </h2>
        <div className="container text-center">
          <div className=" flex flex-wrap gap-y-4 py-3 justify-center gap-4 items-center">
            {images.map((img) => (
              <img src={img.image} className=" w-3/12 md:w-2/12 rounded-md" />
            ))}
          </div>
          <DarkButton to={"/about"} className="mt-6   ">
            More Work
          </DarkButton>
        </div>
      </div>
      {/* ============ testmonial section ======== */}
      <Container />
    </>
  );
}

export default Home;
