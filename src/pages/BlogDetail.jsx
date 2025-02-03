import React from "react";
import Banner from "../components/Banner";
import ship from "../assets/images/ship2.png";
import { Link, useParams } from "react-router-dom";
import Title from "../components/Title";
import bannerImg from "../assets/images/blogDetailBanner.png";

function BlogDetail() {
  const { id } = useParams();
  const blogInfo = [
    {
      id: 1,
      day: "08",
      month: "September",
      title: "Inland freight a worthy solution for your business",
    },
    {
      id: 2,
      day: "12",
      month: "October",
      title: "How technology can help redraw the supply chain map",
    },
    {
      id: 3,
      day: "25",
      month: "March",
      title: "Five things you should have ready for your broker",
    },
    {
      id: 4,
      day: "28",
      month: "June",
      title: "Four simple tips for becoming a healthier truck driver",
    },
    {
      id: 5,
      day: "29",
      month: "July",
      title: "What Is The Role Of A Logistics Operations Manager",
    },
  ];
  const listInfo = [
    {
      id: 1,
      name: "Shipping",
      number: "3",
    },
    {
      id: 2,
      name: "Services",
      number: "5",
    },
    {
      id: 3,
      name: "Transport",
      number: "2",
    },
    {
      id: 4,
      name: "Warehouse",
      number: "10",
    },
    {
      id: 5,
      name: "Transport Industries",
      number: "6",
    },
    {
      id: 6,
      name: "Air Transportaion",
      number: "12",
    },
  ];
  const blog = blogInfo.find((item) => item.id === Number(id));

  return (
    <>
      <Banner
        className={"bg-blogDetailBanner"}
        day={blog.day}
        month={blog.month}
        info={blog.title}
        background={bannerImg}
      />
      {/* ============== main section =========== */}
      <div className="container my-10 flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-2/3">
          <h2 className="font-Rubik font-semibold text-2xl md:text-3xl text-secondary-400">
            Your Logistics Solutions
          </h2>
          <p className="font-medium text-secondary-250 my-5">
            Duis semper lacus scelerisque, aliquam leo quis, porttitor leo.
            Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit nec
            feugiat tempus.Phasellus at quam hendrerit semper feugiat id nunc.
            Morbi quis justo velit. Duis semper lacus scelerisque, aliquam leo
            quis, porttitor leo Fusce lectus ex pretium[...]
          </p>
          <div className="quote bg-primary py-8 px-4 md:px-8 text-center text-white">
            <p className="font-Rubik italic text-lg">
              “Digitization within transport and logistics means seamless
              service to our customers, visibility in the supply chain, and
              driving a more efficient business.”
            </p>
          </div>
          <h2 className="font-Rubik font-semibold text-2xl md:text-3xl text-secondary-400 mt-5">
            Safest Logistics Solutions Provider With Integrity
          </h2>
          <p className="font-medium text-secondary-250 my-5">
            Duis semper lacus scelerisque, aliquam leo quis, porttitor leo.
            Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit nec
            attempus.Phasellus at quam hendrerit semper David Warner nunc. Morbi
            quis justo velit. Duis semper lacus scelerisque, aliquam leo quis,
            porttitor leo Fusce lectus ex pretium[...]
          </p>
          <img src={ship} alt="" className="w-full" />
          <p className="font-medium text-secondary-250 my-5">
            Duis semper lacus scelerisque, aliquam leo quis, porttitor leo.
            Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit nec
            attempus.Phasellus at quam hendrerit semper David Warner nunc. Morbi
            quis justo velit. Duis semper lacus scelerisque, aliquam leo quis,
            porttitor leo Fusce lectus ex pretium. Duis semper lacus
            scelerisque, aliquam leo quis, porttitor leo. Etiam lobortis dapib
            libero vel porttitor. Nulla tempor elit nec feugiat tempus Phasellus
            atquam.
          </p>
        </div>
        <div className="w-full md:w-1/3">
          <div className="categories bg-secondary-100 py-6 px-4">
            <h4 className="font-Rubik font-semibold text-xl text-secondary-400 mb-4">
              Categories
            </h4>
            <ul>
              {listInfo.map((item) => (
                <li
                  className="flex justify-between items-center border-b border-secondary-150 py-4"
                  key={item.id}
                >
                  <span>{item.name}</span>
                  <span>({item.number})</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-secondary-100 py-6 px-4 my-8">
            <h4 className="font-Rubik text-xl font-semibold text-secondary-400 mb-4">
              How can we help you?
            </h4>
            <p className="font-Rubik text-secondary-250 mb-10">
              Duis semper lacus scelerisque, aliquam leo quis, porttitor leo.
              Etiam lobortis dapib libero vel porttitor. Nulla tempor elit nec
              feugiat tempus Phasellus atquam.
            </p>
            <Link
              to={"/contact"}
              className="py-4 px-10 bg-custom-gradient font-semibold text-secondary-200 hover:text-white"
            >
              Contact
            </Link>
          </div>
          <div className="bg-primary py-6 px-4 my-8 text-white">
            <Title text={"Get In Touch"} className={"font-semibold text-2xl"} />
            <div className="phone my-6 text-xl">
              <p>Need help?</p>
              <p>(00) 112 365 489</p>
            </div>
            <div className="phone text-xl">
              <p>Need help?</p>
              <p>(00) 112 365 489</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDetail;
