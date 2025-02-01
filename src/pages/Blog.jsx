import React from "react";
import Banner from "../components/Banner";
import Title from "../components/Title";
import BlogItem from "../components/BlogItem";
import blog1 from "../assets/images/blog1.png";
import blog2 from "../assets/images/blog2.png";
import blog3 from "../assets/images/blog3.png";
import blog4 from "../assets/images/multiTruck.jpeg";
import blog5 from "../assets/images/blog5.png";

function Blog() {
  const blogInfo = [
    {
      id: 1,
      pic: blog1,
      day: "08",
      month: "September",
      title: "Inland freight a worthy solution for your business",
    },
    {
      id: 2,
      pic: blog2,
      day: "12",
      month: "October",
      title: "How technology can help redraw the supply chain map",
    },
    {
      id: 3,
      pic: blog3,
      day: "25",
      month: "March",
      title: "Five things you should have ready for your broker",
    },
    {
      id: 4,
      pic: blog4,
      day: "28",
      month: "June",
      title: "Four simple tips for becoming a healthier truck driver",
    },
    {
      id: 5,
      pic: blog5,
      day: "29",
      month: "July",
      title: "What Is The Role Of A Logistics Operations Manager",
    },
  ];
  return (
    <>
      <Banner
        title={"Blog"}
        info={"Our Latest News"}
        className={"bg-blogBanner mb-10"}
      />
      {/* ===========blog section =========== */}
      <div className="container my-10">
        <div className="header text-center space-y-4 mb-6">
          <Title text={"Our Blog"} className={"bg-secondary-50"} />
          <h2 className="font-Rubik font-semibold text-2xl md:text-4xl text-secondary-400">
            Our Latest News
          </h2>
          {blogInfo.map((blog) => (
            <BlogItem key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Blog;
