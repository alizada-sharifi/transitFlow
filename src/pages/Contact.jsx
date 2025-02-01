import React from "react";
import Banner from "../components/Banner";
import Title from "../components/Title";
import FaqItem from "../components/FaqItem";
import employee from "../assets/images/employee.png";
import HeadingItem from "../components/layout/website/HeadingItem";
import { Phone } from "../components/icons";
import GoldenButton from "../components/buttons/GoldenButton";
import Container from "../components/contact/Container";

function Contact() {
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
      <Banner
        title={"Contact"}
        info={"Contact Us"}
        className={"bg-contactBanner mb-10"}
      />
      {/* ===========contact section ========== */}
      <Container  />
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
    </>
  );
}

export default Contact;
