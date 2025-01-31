import React from "react";
import Title from "../components/Title";
function Banner({ title, info }) {
  return (
    <div className="banner bg-aboutBanner py-40 bg-center bg-cover mb-10">
      <div className="container">
        <Title text={title} className={"text-white"} />
        <h2 className="font-Rubik font-bold text-3xl md:text-5xl mt-4 text-white">
          {info}
        </h2>
      </div>
    </div>
  );
}

export default Banner;
