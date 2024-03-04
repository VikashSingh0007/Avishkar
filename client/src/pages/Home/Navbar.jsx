import { useState } from "react";
import close from "./culrav/assets/close.svg";
import menu from "./culrav/assets/menu.svg";
import logo from "./culrav/assets/culravAviskarLogo.png";
// import { navLinks } from "../../constants/Home";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const navLinks = [
    {
      id: "team",
      title: "Our Team",
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
    <nav className="w-auto flex py-0 justify-between items-center navbar">
      <Link to="/">
        <img
          src={logo}
          alt="AvishkarCulrav"
          className="ml-2 w-20 h-20 lg:w-40 lg:h-40"
        />
      </Link>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins mr-16 font-meduim cursor-pointer text-l ${
              active === nav.title ? "text-black font-medium" : "text-gray-900"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.5)", // Adjust opacity as needed
              backdropFilter: "blur(10px)", // Apply the blur effect
              borderRadius: "10px", // Add rounded corners for a glassy effect
              padding: "8px", // Add padding to the list items
            }}
          >
            <Link to={`/${nav.id}`}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] mr-4 object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-gray-100 absolute z-[15] top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title
                    ? "text-black font-bold"
                    : "text-gray-600"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <Link to={`/${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
