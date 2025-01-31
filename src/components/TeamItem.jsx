import { Facebook, Instagram, Linkedin, Twitter } from "./icons";
import { Link } from "react-router-dom";

function TeamItem({ pic, name, job }) {
  return (
    <div className="card w-full sm:w-[45%]  md:w-[31%] ">
      <img src={pic} alt="" className="w-full" />
      <div className="relative">
        <div className="social bg-custom-gradient p-2 flex items-center gap-3 absolute right-0 -top-4 ">
          <Link>
            <Linkedin className={"fill-black"} />
          </Link>
          <Link>
            <Twitter className={"fill-black"} />
          </Link>
          <Link>
            <Facebook className={"fill-black"} />
          </Link>
          <Link>
            <Instagram className={"fill-black"} />
          </Link>
        </div>
        <div className="info bg-secondary-400 px-8 pb-4 pt-8 text-white font-medium  ">
          <p className="font-Rubik text-xl">{name}</p>
          <p className="font-Krub text-base">{job}</p>
        </div>
      </div>
    </div>
  );
}

export default TeamItem;
