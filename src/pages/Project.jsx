import React from "react";
import Banner from "../components/Banner";
import GalleryItem from "../components/GalleryItem";
import Number from "../components/Number";
import blog1 from "../assets/images/blog1.png";
import blog2 from "../assets/images/blog2.png";
import blog3 from "../assets/images/blog3.png";
import airplane from "../assets/images/airplane.jpeg";
import airplane2 from "../assets/images/airplane2.jpeg";
import employee from "../assets/images/employee.png";
import bannerImg from "../assets/images/projectBanner.png";

function Project() {
  const galleries = [
    {
      id: 1,
      pic: airplane2,
    },
    {
      id: 2,
      pic: blog2,
    },
    {
      id: 3,
      pic: airplane,
    },
    {
      id: 4,
      pic: employee,
    },
    {
      id: 5,
      pic: blog1,
    },
    {
      id: 6,
      pic: blog3,
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
      <Banner title={"Gallery"} info={"Our Project"} background={bannerImg} />
      <div className="container my-10 flex flex-wrap justify-between gap-y-10 ">
        {galleries.map((item) => (
          <GalleryItem key={item.id} {...item} />
        ))}
      </div>
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

export default Project;
