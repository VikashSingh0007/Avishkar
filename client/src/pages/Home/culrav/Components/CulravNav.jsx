import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/feather/menu";
import { x } from "react-icons-kit/feather/x";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import "./CulravNav.css";
import Logo from "../../culrav/assets/culravAviskarLogo.png";

const CulravNav = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="nav-wrapper">
      <nav
        className={`avishkar-navbar ${
          toggle
            ? "expanded bg-zinc-900 bg-opacity-70 rounded-full border-2"
            : " rounded-b-3xl "
        }`}
      >
        <img
          className="avishkar-logo hover:text-black cursor-pointer w-fit h-24 transition duration-500 ease-in-out transform hover:bg-teal-400 hover:bg-opacity-90 hover:border-2 hover:rounded-3xl hover:p-[2px] hover:scale-110"
          src={Logo}
          alt="Avishkar Logo"
        />
        <div className="avishkar-toggle-icon" onClick={handleToggle}>
          <Icon
            icon={toggle ? x : menu}
            size={28}
            className={`toggle-icon ${toggle ? "rotate-icon" : ""}`}
          />
        </div>
        <ul className={`nav-links ${toggle ? "expanded" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/accommodation">Accommodation</Link>
          </li>
          <li>
            <Link to="/Our-Team">Our-Team</Link>
          </li>
          <li>
            <Link to="/login" className="btn11">
              Login
            </Link>
          </li>
        </ul>

        {/* <Link className="" to="/profile">
          <CgProfile
            className="profile-icon"
            size={50}
          />
        </Link> */}
      </nav>
    </div>
  );
};

export default CulravNav;
