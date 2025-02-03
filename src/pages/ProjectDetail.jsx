import { useState } from "react";
import Banner from "../components/Banner";
import { Toggle, Playbtn } from "../components/icons";
import blog1 from "../assets/images/blog1.png";
import blog2 from "../assets/images/blog2.png";
import blog3 from "../assets/images/blog3.png";
import airplane from "../assets/images/airplane.jpeg";
import airplane2 from "../assets/images/airplane2.jpeg";
import employee from "../assets/images/employee.png";
import Modal from "../components/Modal";
import GalleryItem from "../components/GalleryItem";
import { useParams } from "react-router-dom";
import bannerImg from "../assets/images/projectDetailBaneer.png";

function ProjectDetail() {
  const { id } = useParams();
  const galleries = [
    {
      id: 1,
      pic: airplane2,
      category: "Air Transportaion",
      customer: "David Warner",
      date: "12 February, 2024",
      status: "completed",
      tags: "Life Style Travel , Best Delivery",
    },
    {
      id: 2,
      pic: blog2,
      category: "Warehouse Transportaion",
      customer: "Jem Walker",
      date: "20 February, 2024",
      status: "inProgress",
      tags: "Life Style Travel , Best Delivery",
    },
    {
      id: 3,
      pic: airplane,
      category: "Air Transportaion",
      customer: "Katlin Smith",
      date: "12 January, 2025",
      status: "canceled",
      tags: "Life Style Travel , Best Delivery",
    },
    {
      id: 4,
      pic: employee,
      category: "Warehouse Transportaion",
      customer: "Sam",
      date: " 25 June, 2024",
      status: "completed",
      tags: "Life Style Travel , Best Delivery",
    },
    {
      id: 5,
      pic: blog1,
      category: "Shipping",
      customer: "Katlin Smith",
      date: "12 July, 2024",
      status: "inProgress",
      tags: "Life Style Travel , Best Delivery",
    },
    {
      id: 6,
      pic: blog3,
      category: "Shipping",
      customer: "David Warner",
      date: "12 February, 2024",
      status: "canceled",
      tags: "Life Style Travel , Best Delivery",
    },
  ];
  const gallery = galleries.find((gallery) => gallery.id === Number(id));

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
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Banner
        title={gallery.category}
        info={"Air Cargo Transportation"}
        background={bannerImg}
      />
      <div className="project-detail mb-10 py-10 bg-secondary-100">
        <div className="container flex flex-col md:flex-row gap-10 justify-center items-center">
          <div className="w-full md:w-1/2">
            <img src={gallery.pic} alt="" className=" object-cover" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="font-Rubik font-semibold text-4xl text-secondary-400 mb-8">
              Project Details
            </h2>
            <ul className="space-y-4">
              <li className="font-Rubik text-secondary-400 text-xl">
                <span className="font-medium">Customer :</span>
                <span className="">{gallery.customer}</span>
              </li>
              <li className="font-Rubik text-secondary-400 text-xl">
                <span className="font-medium">Category :</span>
                <span className="">{gallery.category}</span>
              </li>
              <li className="font-Rubik text-secondary-400 text-xl">
                <span className="font-medium">Date :</span>
                <span className="">{gallery.date}</span>
              </li>
              <li className="font-Rubik text-secondary-400 text-xl">
                <span className="font-medium">Status :</span>
                <span className="">{gallery.status}</span>
              </li>
              <li className="font-Rubik text-secondary-400 text-xl">
                <span className="font-medium">Tags :</span>
                <span className="">{gallery.tags}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* ===================== */}
      <div className="container my-10">
        <div>
          <h2 className="font-Rubik font-semibold text-2xl md:text-4xl text-secondary-400 mb-4">
            {gallery.category}
          </h2>
          <p className="font-medium text-secondary-250 mb-8">
            Duis semper lacus scelerisque, aliquam leo quis, porttitor leo.
            Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit nec
            feugiat tempus.Phasellus at quam id elit hendrerit semper feugiat id
            nunc. Morbi quis justo velit. Duis semper lacus scelerisque, aliquam
            leo quis, porttitor leo. Fusce lectus ex, pretium efficitur suscipit
            sed, faucibus vel elit Integer adipiscing erat eget risus
            sollicitudin pellentesque non erat. Maecenas nibh dolor malesuada
            sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien, nec
            tincidunt nunc posuere.
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
        {/* ============= */}
        <div className="my-10">
          <h2 className="font-Rubik font-semibold text-2xl md:text-4xl text-secondary-400 mb-4">
            Our Project Transportation
          </h2>
          <p>
            Duis semper lacus scelerisque, aliquam leo quis, porttitor leo.
            Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit nec
            feugiat tempus.Phasellus at quam id elit hendrerit semper feugiat id
            nunc. Morbi quis justo velit. Duis semper lacus scelerisque, aliquam
            leo quis, porttitor leo. Fusce lectus ex, pretium efficitur suscipit
            sed, faucibus vel elit Integer adipiscing erat eget risus
            sollicitudin pellentesque non erat. Maecenas nibh dolor malesuada
            sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien, nec
            tincidunt nunc posuere.
          </p>
          <div className="relative mt-4">
            <img src={blog1} alt="" />
            <div className="mask absolute w-full h-full top-0 z-10  flex items-center justify-center">
              <button onClick={() => setIsOpen(true)}>
                <Playbtn />
              </button>
            </div>
          </div>
        </div>
        {/* ============ related section ========== */}
        <div className=" my-10 flex flex-wrap justify-between gap-y-10 ">
          {galleries
            .filter(
              (item) =>
                item.category === gallery.category && item.id !== gallery.id
            )
            .map((item) => (
              <GalleryItem key={item.id} {...item} />
            ))}
        </div>
      </div>
      {/* ======== MODAL section =========== */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

export default ProjectDetail;
