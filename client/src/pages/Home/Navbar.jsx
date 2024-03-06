import React, { useState, useEffect } from "react";
import close from "./culrav/assets/close.svg";
import menu from "./culrav/assets/menu.svg";
import logo from "./culrav/assets/culravAviskarLogo.png";
import "./Nav.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    {
      id: "culravLanding",
      title: "Culrav",
    },
    {
      id: "avishkar-landing",
      title: "Avishkar",
    },
    {
      id: "accommodation",
      title: "Accommodation",
    },
    {
      id: "team",
      title: "Team",
    },
    {
      id: "login",
      title: "Login",
    },
  ];

  return (
    <nav
      className={`w-full fixed top-0 z-20 ${scrolled ? "bg-orange-400" : ""}`}
    >
      <div className="flex justify-between items-center px-4 py-0">
        <div className="w-[10%]">
          <Link to="/">
            <img
              src={logo}
              alt="AvishkarCulrav"
              className="w-12 h-14 md:w-16 md:h-16 lg:w-20 lg:h-16 "
            />
          </Link>
        </div>
        <div className="w-[90%] ">
          <ul className="list-none  ml-[20%] md:flex hidden justify-end items-center flex-1 text-xl rumoura-font ">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-poppins text-xxl mr-8  md:mr-12 md:font-medium md:text-sm lg:text-xl font-medium cursor-pointer rumoura-font ${
                  active === nav.title ? "text-black" : "text-gray-900"
                }`}
                onClick={() => setActive(nav.title)}
              >
                <Link to={`/${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <img
          src={toggle ? close : menu}
          alt="menu"
          className="block md:hidden  w-6 h-6"
          onClick={() => setToggle(!toggle)}
        />
      </div>

      {toggle && (
        <div className=" md:hidden p-6 bg-gray-100 absolute z-[20] top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar">
          <ul className="flex flex-col space-y-2">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer ${
                  active === nav.title ? "text-black" : "text-gray-600"
                }`}
                onClick={() => setActive(nav.title)}
              >
                <Link to={`/${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
