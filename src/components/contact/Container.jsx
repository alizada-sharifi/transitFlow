import React from "react";
import Title from "../Title";
import { Clock, Email, Phone } from "../icons";
import GoldenButton from "../buttons/GoldenButton";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
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
  {
    id: 3,
    icon: Phone,
    para1: "Call Us",
    para2: "(00) 112 365 489",
  },
];
import HeadingItem from "../layout/website/HeadingItem";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import schema from "../../schemas/Schema";
import { Input, Textarea } from "../form";

function Container() {
  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues: { email: "", name: "", phone: "", city: "" },
  });
  // ============ form submit function ===========
  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };
  return (
    <div className="bg-primary py-12 my-10">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className=" w-full md:w-1/3 text-white">
            <Title className={"bg-secondary-50 text-white"} text={"Contact"} />
            <h2 className="font-Rubik font-semibold text-3xl my-6">
              Get in touch with us
            </h2>
            <p className="font-medium">
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value.
            </p>
            {headingInfo.map((item) => (
              <HeadingItem key={item.id} {...item} className={"my-6"} />
            ))}
          </div>
          <div className=" w-full md:w-2/3">
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-1/2 space-y-4">
                    <Input name="name" type="text" placeholder="Your name*" />
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="Phone Number*"
                    />
                  </div>
                  <div className="w-full md:w-1/2 space-y-4">
                    <Input name="email" type="email" placeholder="Email*" />
                    <Input name="city" placeholder="City*" type="text" />
                  </div>
                </div>
                <Textarea placeholder={"Your Message"} />
                <GoldenButton className="mt-4" type="submit">
                  Submit Message
                </GoldenButton>
              </form>
            </FormProvider>
          </div>
        </div>
        <div className="flex flex-wrap mt-4">
          <img src={img1} alt="" className="w-1/2 md:w-1/4" />
          <img src={img2} alt="" className="w-1/2 md:w-1/4" />
          <img src={img3} alt="" className="w-1/2 md:w-1/4" />
          <img src={img4} alt="" className="w-1/2 md:w-1/4" />
        </div>
      </div>
    </div>
  );
}

export default Container;
