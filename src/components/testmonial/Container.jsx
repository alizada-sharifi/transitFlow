import React from "react";
import Title from "../Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ArrowLeft, ArrowRight } from "../icons";

import person1 from "../../assets/images/person1.jpg";
import person2 from "../../assets/images/person2.jpeg";
import person3 from "../../assets/images/person3.jpeg";
import person4 from "../../assets/images/person4.avif";
import Item from "./Item";
function Container() {
  const itemsInfo = [
    {
      id: 1,
      color: "text-secondary-250",
      background: "bg-secondary-100",
      name: "Kathleen Smith",
      pic: person1,
      company: "Fuel Company",
      desc: "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
    },
    {
      id: 2,
      background: "bg-primary",
      color: "text-white",
      name: "Campbell Mae",
      pic: "",
      company: "Restoration Company",
      desc: "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
    },
    {
      id: 3,
      background: "bg-secondary-100",
      color: "text-secondary-250",
      name: "John Martin",
      pic: person3,
      company: "Fuel Company",
      desc: "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
    },
    {
      id: 4,
      background: "bg-primary",
      color: "text-white",
      name: "Parker Bee",
      pic: person4,
      company: "Restoration Company",
      desc: "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
    },
  ];
  return (
    <div className="container y-8">
      <div className="heading flex flex-col md:flex-row items-center justify-between">
        <div>
          <Title text={"Testimonial"} className={"bg-secondary-50"} />
          <h2 className="font-Rubik font-semibold text-4xl text-secondary-400 my-3">
            What Our Customer Say
          </h2>
        </div>
        <div className="arrows flex gap-3">
          <ArrowLeft />
          <ArrowRight />
        </div>
      </div>
      <div className="body flex">
        <Swiper
          modules={[Pagination]}
          //   pagination={{ clickable: true }}
          spaceBetween={20}
            breakpoints={{
              768: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
          className="w-full max-w-3xl mx-auto"
        >
          {itemsInfo.map((item) => (
            <SwiperSlide>
              <Item {...item} />
            </SwiperSlide>
          ))}
          {/* <SwiperSlide className="bg-blue-500 text-white p-10 text-center rounded-lg">
            Slide 1
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
}

export default Container;
