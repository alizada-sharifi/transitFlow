import React from "react";
import { Logo, Clock, Email, Linkedin, Twitter, Facebook } from "../../icons";
import HeadingItem from "./HeadingItem";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import GoldenButton from "../../buttons/GoldenButton";
import { FormProvider, useForm } from "react-hook-form";
import schema from "../../../schemas/Schema";
import { Input } from "../../form";

function Footer() {
  const headingInfo = [
    {
      id: 1,
      icon: Clock,
      para1: "Mon - Sat 9.00 - 18.00",
      para2: "Sunday Closed",
    },
    {
      id: 2,
      icon: Email,
      para1: "Email",
      para2: "contact@logistics.com",
    },
  ];
  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues: { email: "" },
  });
  // ============ form submit function ===========
  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };
  return (
    <footer className="bg-primary">
      <div className="container flex flex-wrap justify-between py-4 gap-y-12">
        <div className=" w-full md:w-5/12 lg:w-3/12">
          <Logo />
          <div className="content flex flex-col gap-4 mt-8">
            <p className="font-Krub font-medium text-secondary-50 text-justify">
              Leverage agile frameworks to provide a robust synopsis for
              strategy collaborative thinking to further the overall value
              proposition.
            </p>
            {headingInfo.map((item) => (
              <HeadingItem {...item} key={item.id} />
            ))}
          </div>
        </div>
        <div className="w-5/12  lg:w-2/12">
          <h2 className="font-Rubik font-medium text-2xl text-white">Pages</h2>
          <ul className="font-Krub font-medium text-base text-white mt-8 flex flex-col gap-4">
            <li>
              <Link>About Us</Link>
            </li>
            <li>
              <Link>Our Team</Link>
            </li>
            <li>
              <Link>Our Project</Link>
            </li>
            <li>
              <Link>Pricing</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="w-5/12 lg:w-2/12">
          <h2 className="font-Rubik font-medium text-2xl text-white">
            Utility
          </h2>
          <ul className="font-Krub font-medium text-base text-white mt-8 flex flex-col gap-4">
            <li>
              <Link>Style Guide</Link>
            </li>
            <li>
              <Link>Changelog</Link>
            </li>
            <li>
              <Link>Licenses</Link>
            </li>
            <li>
              <Link>Protected</Link>
            </li>
            <li>
              <Link>Not Found</Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-5/12 lg:w-3/12">
          <h2 className="font-Rubik font-medium text-2xl text-white">
            Utility
          </h2>
          <div className="content mt-8">
            <FormProvider {...methods}>
              <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <Input
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                />
                <GoldenButton type="submit" className={"!px-10"}>
                  Submit
                </GoldenButton>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
