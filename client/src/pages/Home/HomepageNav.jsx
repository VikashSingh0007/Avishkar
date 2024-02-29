import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/feather/menu";
import { x } from "react-icons-kit/feather/x";
import "./culrav/Components/CulravNav.css";

export const HomepageNav = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="wrapper">
      <nav
        className={`navbar ${
          toggle
            ? "expanded bg-zinc-900 bg-opacity-70 rounded-full border-slate-950 border-2"
            : "bg-opacity-60 rounded-b-3xl"
        }`}
      >
        <h2 className="logo font-custom cursor-pointer">Culrav</h2>

        <div className="toggle-icon" onClick={handleToggle}>
          {toggle ? (
            <Icon icon={x} size={28} className="cursor-pointer rotate-icon" />
          ) : (
            <Icon
              icon={menu}
              size={28}
              className="bg-white bg-opacity-80 rounded-lg py-1 pl-4 pr-2 cursor-pointer rotate-icon transform hover:rotate-180 transition duration-300"
            />
          )}
        </div>

        <ul className="links font-custom">
          <li>Sponsors</li>
          <a href="/team">
            <li>Team</li>
          </a>
          <li>Accommodation</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </div>
  );
};
export default HomepageNav;
