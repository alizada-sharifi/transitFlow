import {
  Logo,
  Clock,
  Email,
  Phone,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  ArrowDown,
  ArrowUp,
} from "../../icons";
import HeadingItem from "./HeadingItem";
import { cn } from "../../../helpers/common";
import { Link, NavLink } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";
import { useState } from "react";

function Header() {
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const handlePagesClick = (e) => {
    e.preventDefault();
    setIsPagesOpen((prev) => !prev);
  };
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
  return (
    <header>
      {/* =========== heading section =========== */}
      <div className="heading bg-primary py-6 hidden lg:block ">
        <div className="container flex justify-between items-center">
          <Logo />
          <div className="flex w-2/3 justify-between">
            {headingInfo.map((item) => (
              <HeadingItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
      {/* ============== navbar section ===================== */}
      <div className="navbar bg-header font-Krub hidden md:block   ">
        <div className="container flex justify-between items-center">
          <nav className="flex gap-x-8 lg:gap-x-12 relative">
            <NavLink
              to="/"
              className={({ isActive }) =>
                cn("text-base text-white font-semibold py-3", {
                  "border-b-2": isActive,
                })
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                cn("text-base text-white font-semibold py-3", {
                  "border-b-2": isActive,
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
                    "text-base text-white font-semibold py-3 flex items-center gap-1",
                    {
                      "border-b-2": isActive,
                    }
                  )
                }
              >
                Pages
                {isPagesOpen ? (
                  <ArrowUp />
                ) : (
                  <ArrowDown className={"stroke-white"} />
                )}
              </NavLink>
              {/*================ Dropdown menu ================ */}
              {isPagesOpen && (
                <div className="absolute left-0 mt-2 bg-white text-black w-48 shadow-lg font-Rubik font-medium">
                  <NavLink
                    to="/services"
                    className={({ isActive }) =>
                      cn("block py-2 px-4 text-sm hover:bg-slate", {
                        "bg-slate": isActive,
                      })
                    }
                  >
                    Services
                  </NavLink>

                  <NavLink
                    to="/team"
                    className={({ isActive }) =>
                      cn("block py-2 px-4 text-sm hover:bg-slate", {
                        "bg-slate": isActive,
                      })
                    }
                  >
                    Team
                  </NavLink>
                  <NavLink
                    to="/pricing"
                    className={({ isActive }) =>
                      cn("block py-2 px-4 text-sm hover:bg-slate", {
                        "bg-slate": isActive,
                      })
                    }
                  >
                    Pricing
                  </NavLink>
                  <NavLink
                    to="/404"
                    className={({ isActive }) =>
                      cn("block py-2 px-4 text-sm hover:bg-slate", {
                        "bg-slate": isActive,
                      })
                    }
                  >
                    404 Page
                  </NavLink>
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      cn("block py-2 px-4 text-sm hover:bg-slate", {
                        "bg-slate": isActive,
                      })
                    }
                  >
                    Blog
                  </NavLink>
                </div>
              )}
            </div>
            <NavLink
              to="/project"
              className={({ isActive }) =>
                cn("text-base text-white font-semibold py-3", {
                  "border-b-2": isActive,
                })
              }
            >
              Project
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                cn("text-base text-white font-semibold py-3", {
                  "border-b-2": isActive,
                })
              }
            >
              Contact
            </NavLink>
          </nav>
          <div className="icons flex items-center gap-x-5 lg:gap-x-10">
            <Link>
              <Instagram />
            </Link>
            <Link>
              <Facebook />
            </Link>
            <Link>
              <Twitter />
            </Link>
            <Link>
              <Linkedin />
            </Link>
            <button className="font-Krub text-secondary-200 bg-white py-6 px-8 hidden lg:block ">
              Request Quote
            </button>
          </div>
        </div>
      </div>
      <MobileNavbar />
    </header>
  );
}

export default Header;
