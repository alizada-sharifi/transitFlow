import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../components/Banner";
import Item2 from "../components/services/Item2";
import {
  Playbtn,
  Ship,
  Toggle,
  Airplane,
  Board,
  Truck,
  User,
  Warehouse,
} from "../components/icons";
import ship from "../assets/images/home_bg.jpg";
import canteen from "../assets/images/canteen.jpg";
import truck from "../assets/images/truck.png";
import person from "../assets/images/blog2.png";
import airplane from "../assets/images/airplane.jpeg";
import employee from "../assets/images/employee.png";
import Modal from "../components/Modal";
import bannerImg from "../assets/images/serviceDetailBanner.png";

function ServiceDetail() {
  const { id } = useParams();

  const listInfo = [
    {
      id: 1,
      text: "Clearance and compliance service",
    },
    {
      id: 2,
      text: "Saving Time to Deal with commodo iaculis",
    },
    {
      id: 3,
      text: "Automate your business elis tristique",
    },
    {
      id: 4,
      text: "Saving Time to Deal with commodo iaculis",
    },
  ];

  const itemsInfo = [
    {
      id: 1,
      icon: Ship,
      title: "Sea Transport Services",
      pic: ship,
    },
    {
      id: 2,
      icon: Warehouse,
      title: "Warehousing Services",
      pic: canteen,
    },
    {
      id: 3,
      icon: Airplane,
      title: "Air Fright Services",
      pic: airplane,
    },
    {
      id: 4,
      icon: Board,
      title: "Project & Exhibition",
      pic: person,
    },
    {
      id: 5,
      icon: Truck,
      title: "Local Shipping Services",
      pic: truck,
    },
    {
      id: 6,
      icon: User,
      title: "Customer Clearance",
      pic: employee,
    },
  ];
  const item = itemsInfo.find((item) => item.id === Number(id));

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Banner
        title={"Service Single"}
        info={"Service Details"}
        background={bannerImg}
      />
      <div className="container my-10 spacey-8">
        <img
          src={item.pic}
          alt={item.title}
          className="w-full object-cover max-h-96 "
        />
        <Item2
          className={"font-bold my-4"}
          title={item.title}
          icon={item.icon}
        />
        <p className="font-Krub font-medium text-secondary-250 mb-4">
          Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit,
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est,
          qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit,
          sed quia non numquam eius modi tempora incidunt, ut labore et dolore
          magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
          nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
          aliquid ex ea commodi consequatur?
        </p>
        <p className="font-Krub font-medium text-secondary-250 ">
          Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse,
          quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat,
          quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio
          dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti
          atque corrupti, quos dolores et quas molestias excepturi sint,
          obcaecati cupiditate non provident, similique sunt in culpa, qui
          officia deserunt mollitia animi, id est laborum et dolorum fuga. Et
          harum quidem rerum facilis est et expedita distinctio.
        </p>
        <div className="flex flex-col md:flex-row gap-6 mt-4">
          <div className="w-full md:w-1/2">
            <h2 className="font-Rubik font-semibold text-3xl text-secondary-400">
              Benefit of Service
            </h2>
            <p className="font-Krub font-medium text-secondary-250 my-4">
              Sed ut perspiciatis, unde omnis iste natu volupta temaccu santium
              doloremque laudantium, totam rem quae ab illo inventore veritatis.
            </p>
            <ul className="space-y-4">
              {listInfo.map((item) => (
                <li className="flex gap-2 items-center" key={item.id}>
                  <Toggle />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <img src={truck} alt="" />
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row gap-6 mt-12">
          <div className=" w-full md:w-1/2 relative">
            <img src={person} alt="" />
            <div className="mask absolute w-full h-full top-0 z-10 bg-black bg-opacity-35 flex items-center justify-center">
              <button onClick={() => setIsOpen(true)}>
                <Playbtn />
              </button>
            </div>
          </div>
          <div className=" w-full md:w-1/2">
            <h2 className="font-Rubik font-semibold text-4xl text-secondary-400">
              How It Works
            </h2>
            <p className="font-Krub font-medium text-secondary-250 my-4">
              Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas
              sit, doloremque laudantium.
            </p>
            <p className="font-Krub font-medium text-secondary-250">
              Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
              quae ab illo inventore veritatis.
            </p>
          </div>
        </div>
      </div>
      {/* ======== MODAL section =========== */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

export default ServiceDetail;
