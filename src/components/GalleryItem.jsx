import React from "react";
import { Link } from "react-router-dom";
import { Chevron } from "./icons";
function GalleryItem({ pic, id }) {
  return (
    <div className="card w-full sm:w-[45%] md:w-[31%] h-80 relative group ">
      <img src={pic} alt="" className="w-full h-full object-cover" />
      <div className="mask absolute bg-secondary-400/90 w-full top-0 h-full hidden group-hover:flex justify-center items-center ">
        <Link to={`/projectDetail/${id}`}>
          <Chevron />
        </Link>
      </div>
    </div>
  );
}

export default GalleryItem;
