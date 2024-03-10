import React, { useState, useEffect } from "react";
import close from "./culrav/assets/close.svg";
import menu from "./culrav/assets/menu.svg";
import logo from "./culrav/assets/culravAviskarLogo.png";
import "./Nav.css";
import { Link } from "react-router-dom";

const Navbar = ({ page }) => {
  // console.log(page);
  const [active, setActive] = useState(page);
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const userData = localStorage.getItem("userData");
  const userToken = localStorage.getItem("userToken");

  // console.log(page);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 70;
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
    // {
    //   id: "accommodation",
    //   title: "Accommodation",
    // },
    {
      id: "team",
      title: "Team",
    },
    {
      id: "login",
      title: "Login",
    },
    {
      id: "profile",
      title: "Profile",
    },
  ];

  return (
    <nav
      className={`w-full fixed top-0 z-20 ${
        scrolled
          ? "bg-[#ad9152cc]   bg-opacity-75"
          : " border-opacity-80 bg-opacity-90 border-t-[12px] -mt-2 border-black"
      }`}
    >
      <div className="flex justify-between items-center  px-4 py-0">
        <div className="">
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
            <li
              key={"culravLanding"}
              className={`font-Robo mr-8 tracking-[4px]  md:mr-12  md:text-sm font-extrabold lg:text-xl cursor-pointer ${
                active === "Culrav"
                  ? "text-black bg-[#ae9e7f] p-2 rounded-xl "
                  : "text-slate-200"
              }`}
              style={
                active === "Culrav"
                  ? { boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }
                  : null
              }
              onClick={() => setActive("Culrav")}
            >
              {<Link to={"/culravLanding"}>Culrav</Link>}
            </li>
            <li
              key={"avishkar-landing"}
              className={`font-Robo tracking-[3px] font-extrabold text-xxl mr-8  md:mr-12  md:text-sm lg:text-xl  cursor-pointer rumoura-font ${
                active === "Avishkar"
                  ? "text-black bg-[#ae9e7f] p-2 rounded-xl"
                  : "text-slate-200"
              }`}
              style={
                active === "Avishkar"
                  ? { boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }
                  : null
              }
              onClick={() => setActive("Avishkar")}
            >
              {<Link to={"/avishkar-landing"}>Avishkar</Link>}
            </li>
            {/* <li
              key={"accommodation"}
              className={`font-Robo tracking-[2px] mr-8  md:mr-12  md:text-sm lg:text-xl font-extrabold cursor-pointer rumoura-font ${
                active === "Accommodation"
                  ? "text-black bg-[#ae9e7f] p-2 rounded-xl"
                  : "text-slate-200"
              }`}
              style={
                active === "Accommodation"
                  ? { boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }
                  : null
              }
              onClick={() => setActive("Accommodation")}
            >
              {<Link to={"/accommodation"}>Accommodation</Link>}
            </li> */}
            <li
              key={"team"}
              className={`font-Robo tracking-[3px] text-xxl mr-8  md:mr-12  md:text-sm lg:text-xl font-extrabold cursor-pointer rumoura-font ${
                active === "Team"
                  ? "text-black bg-[#ae9e7f] p-2 rounded-xl"
                  : "text-slate-200"
              }`}
              style={
                active === "Team"
                  ? { boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }
                  : null
              }
              onClick={() => setActive("Team")}
            >
              {<Link to={"/team"}>Team</Link>}
            </li>
            <li
              key={"login"}
              className={`font-Robo tracking-[3px] text-xxl mr-8  md:mr-12  md:text-sm lg:text-xl font-extrabold cursor-pointer rumoura-font ${
                active === "Login" || active === "Profile"
                  ? "text-black bg-[#ae9e7f] p-2 rounded-xl"
                  : "text-slate-200"
              }`}
              style={
                active === "Login" || active === "Profile"
                  ? { boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }
                  : null
              }
              onClick={() => setActive("Login")}
            >
              {(!userData || !userToken) && <Link to={"/login"}>Login</Link>}
              {userData && userToken && <Link to={"/profile"}>Profile</Link>}
            </li>
          </ul>
        </div>

        <img
          src={toggle ? close : menu}
          alt="menu"
          className="block md:hidden bg-slate-100 rounded-md p-[3px] bg-opacity-80 w-6 h-6"
          onClick={() => setToggle(!toggle)}
          fill="white"
        />
      </div>

      {toggle && (
        <div
          className="md:hidden p-2 bg-[#6a5937] bg-opacity-70 backdrop-blur-md bg-brown absolute z-[20] top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar shadow-lg"
          style={{ boxShadow: "0px 5px 10px black" }}
        >
          <ul className="flex flex-col space-y-2">
            {navLinks.map((nav, index) =>
              userToken && nav.title === "Login" ? null : (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer  text-white relative ${
                    active === nav.title ? "bg-[#b79e6e] rounded-t-md" : ""
                  }`}
                  onClick={() => setActive(nav.title)}
                >
                  <Link to={`/${nav.id}`} className="block py-2 px-4">
                    {nav.title}
                  </Link>
                  {index < navLinks.length - 1 && (
                    <div className="border-t border-white absolute w-full top-full"></div>
                  )}
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
