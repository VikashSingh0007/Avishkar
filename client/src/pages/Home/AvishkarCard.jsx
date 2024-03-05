import React from "react";
import "./AvishkarCard.css";
import Avishkar from "./culrav/assets/avishkarlogo.png";
import Culrav from "./culrav/assets/CULRAV.png";
import { Link } from "react-router-dom";
import Clouds1 from "./culrav/assets/clouds11.png";
import Clouds2 from "./culrav/assets/clouds2.png";
import Clouds3 from "./culrav/assets/clouds3.png";
import WoodenBar from "./culrav/assets/wooden111.png";
const FixedDivsComponent = () => {
  return (
    <div className="columns-2xs flex flex-col  sm:flex-row gap-8 p-0 relative">
      {/* <div className="absolute top-[-10%] sm:top-[-20%] left-0 right-0 transform -translate-x-1/2 w-full animate-waving">
        <img
          src={WoodenBar}
          className="block mx-auto  lg:w-200px md:w-200px sm:w-200px"
        />
      </div> */}

      <div className="flex-1 sm:w-1/2 lg:w-1/4 rounded-lg p-0 mt-0 sm:mt-0">
        <div className="comic-button-container">
          {/* <button className="comic-button">Events</button> */}
        </div>

        <div className="flex justify-between flex-wrap">
          <Link
            to="/culravLanding"
            className="p-0 ml-0 w-full sm:w-1/2 md:w-1/3 lg:w-auto"
          >
            <div className="relative w-full h-60 md:w-60 md:h-60">
              <img
                src={Culrav}
                alt="Culrav"
                className="w-100% h-100% object-cover rounded-lg hover:scale-125 transition duration-300 ease-in-out"
              />
            </div>
          </Link>
          <Link
            to={window.innerWidth <= 640 ? "/avishkar-landing" : "/avishkar"}
            className="p-0 ml-0 w-full sm:w-1/2 md:w-1/3 lg:w-auto"
          >
            <div className="relative w-full mb-10 h-70 md:w-60 md:h-60">
              <img
                src={Avishkar}
                alt="Avishkar"
                className="w-100% h-100% object-cover rounded-lg hover:scale-125 transition duration-300 ease-in-out"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FixedDivsComponent;
