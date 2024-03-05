import { useState } from "react";
import close from "./culrav/assets/close.svg";
import menu from "./culrav/assets/menu.svg";
import logo from "./culrav/assets/culravAviskarLogo.png";
import "./Nav.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const navLinks = [
    {
      id: "team",
      title: "Team",
    },
    {
      id: "sponsors",
      title: "Sponsors",
    },
    {
      id: "culravLanding",
      title: "Culrav",
    },
    {
      id: "avishkar-landing",
      title: "Avishkar",
    },
    {
      id: "signup",
      title: "Register",
    },
    {
      id: "login",
      title: "Login",
    },
  ];

  return (
    <nav className="w-full fixed top-0  z-10 ">
      <div className="flex  justify-between items-center px-4 py-2">
        <Link to="/">
          <img
            src={logo}
            alt="AvishkarCulrav"
            className="w-14 md:w-20 lg:w-20"
          />
        </Link>

        <ul className="list-none sm:flex hidden justify-end items-center flex-1 bungee-shade-regular">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`font-poppins mr-[20%] md:mr-8 md:font-small md:text-base font-medium cursor-pointer ${
                active === nav.title ? "text-black" : "text-gray-900"
              }`}
              onClick={() => setActive(nav.title)}
            >
              <Link to={`/${nav.id}`}>{nav.title}</Link>
            </li>
          ))}
        </ul>

        <img
          src={toggle ? close : menu}
          alt="menu"
          className="block sm:hidden md:hidden w-6 h-6"
          onClick={() => setToggle(!toggle)}
        />
      </div>

      {toggle && (
        // <div className="sm:hidden bg-gray-100 p-4">
        <div className="sm:hidden  md:hidden p-6 bg-gray-100 absolute z-[20] top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar">
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
