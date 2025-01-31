import React, { useState } from "react";
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

function TestmonialContainer() {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const itemsInfo = [
    {
      id: 1,
      color: "text-secondary-250",
      background: "bg-secondary-100",
      name: "Kathleen Smith",
      pic: person1,
      company: "Fuel Company",
      desc: "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition.",
    },
    {
      id: 2,
      background: "bg-primary",
      color: "text-white",
      name: "Campbell Mae",
      pic: person2,
      company: "Restoration Company",
      desc: "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition.",
    },
    {
      id: 3,
      background: "bg-secondary-100",
      color: "text-secondary-250",
      name: "John Martin",
      pic: person3,
      company: "Fuel Company",
      desc: "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition.",
    },
    {
      id: 4,
      background: "bg-primary",
      color: "text-white",
      name: "Parker Bee",
      pic: person4,
      company: "Restoration Company",
      desc: "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition.",
    },
  ];

  return (
    <div className="container py-8">
      <div className="heading flex flex-col md:flex-row items-center justify-between mb-4">
        <div>
          <Title text="Testimonial" className="bg-secondary-50" />
          <h2 className="font-Rubik font-semibold text-2xl md:text-4xl text-secondary-400 my-3">
            What Our Customers Say
          </h2>
        </div>
        <div className="arrows flex gap-3">
          <button
            onClick={() => swiperInstance && swiperInstance.slidePrev()}
            aria-label="Previous"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={() => swiperInstance && swiperInstance.slideNext()}
            aria-label="Next"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
      <div className="body flex">
        <Swiper
          modules={[Pagination]}
          spaceBetween={0}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
          onSwiper={setSwiperInstance}
          className="w-full"
        >
          {itemsInfo.map((item) => (
            <SwiperSlide key={item.id}>
              <Item {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default TestmonialContainer;
