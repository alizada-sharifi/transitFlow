import { useState } from "react";
import { Logo, Menu, Close, ArrowDown, ArrowUp } from "../../icons";
import { cn } from "../../../helpers/common";

import { NavLink } from "react-router";

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const handlePagesClick = (e) => {
    e.preventDefault();
    setIsPagesOpen((prev) => !prev);
  };
  return (
    <>
      <div className="bg-header md:hidden">
        <div className="container flex justify-between items-center">
          <Logo />
          <button className="cursor-pointer" onClick={() => setIsOpen(true)}>
            <Menu className="fill-primary" />
          </button>
        </div>
      </div>
      <div
        className={cn(
          "fixed inset-0 hidden bg-gray-900/20 transition-opacity duration-300 ease-linear opacity-0 z-50",
          {
            "!block opacity-1": isOpen,
          }
        )}
        dir="rtl"
      >
        <div
          className={cn(
            "relative h-full bg-primary-200 px-2 flex flex-col w-full max-w-xs flex-1 transform transition duration-300 ease-in-out translate-x-full",
            {
              "translate-x-0": isOpen,
            }
          )}
          dir="ltr"
        >
          <div className="relative flex items-center justify-between p-3 ">
            <div className=" top-0 flex items-center justify-between w-full h-full">
              <Close
                className="self-start fill-white cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </div>
            <Logo />
          </div>
          <nav className="flex flex-col  font-Rubik gap-5 px-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                cn("text-sm !pt-0 pb-2 text-white border-b border-slate", {
                  "": isActive,
                })
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                cn("text-sm !pt-0 pb-2 text-white border-b border-slate", {
                  "": isActive,
                })
              }
            >
              About
            </NavLink>
            <div className="relative">
              <NavLink
                to="/pages"
                onClick={handlePagesClick}
                className={({ isActive }) =>
                  cn(
                    "text-sm !pt-0 pb-2 text-white border-b border-slate flex gap-1 items-center",
                    {
                      "border-b-2": isActive,
                    }
                  )
                }
              >
                Pages
                {isPagesOpen ? <ArrowUp /> : <ArrowDown className={"fill-white"} />}
              </NavLink>
              {/*================ Dropdown menu ================ */}
              {isPagesOpen && (
                <div className=" mt-2 bg-primary-200 text-white w-48 shadow-lg font-Rubik font-medium">
                  <NavLink
                    to="/services"
                    className="block py-2 px-4 text-sm hover:bg-primary-100"
                  >
                    Services
                  </NavLink>
                  <NavLink
                    to="/team"
                    className="block py-2 px-4 text-sm hover:bg-primary-100"
                  >
                    Team
                  </NavLink>
                  <NavLink
                    to="/pricing"
                    className="block py-2 px-4 text-sm hover:bg-primary-100"
                  >
                    Pricing
                  </NavLink>
                  <NavLink
                    to="/404"
                    className="block py-2 px-4 text-sm hover:bg-primary-100"
                  >
                    404 Page
                  </NavLink>
                  <NavLink
                    to="/blog"
                    className="block py-2 px-4 text-sm hover:bg-primary-100"
                  >
                    Blog
                  </NavLink>
                </div>
              )}
            </div>
            <NavLink
              to="/project"
              className={({ isActive }) =>
                cn("text-sm !pt-0 pb-2 text-white border-b border-slate", {
                  "": isActive,
                })
              }
            >
              Project
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                cn("text-sm !pt-0 pb-2 text-white border-b border-slate", {
                  "": isActive,
                })
              }
            >
              Contact
            </NavLink>
          </nav>
        </div>
      </div>
    </>
  );
}

export default MobileNavbar;
