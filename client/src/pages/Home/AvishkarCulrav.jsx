import React from "react";
import "./AvishkarCulrav.css";
import Avishkar from "./culrav/assets/avishkarlogo.png";
import Culrav from "./culrav/assets/CULRAV.png";
import { Link } from "react-router-dom";
import Clouds1 from "./culrav/assets/clouds11.png";
import Clouds2 from "./culrav/assets/clouds2.png";
import Clouds3 from "./culrav/assets/clouds3.png";
import WoodenBar from "./culrav/assets/wooden111.png";
import mohit from "./assets/mohit.png";
import juhi from "../Home/culrav/assets/juhi.png";

const FixedDivsComponent = () => {
  return (
    <div className="columns-2xs flex flex-col  sm:flex-row gap-8 p-0 z-[0] opacity-2 relative">
      <div className="absolute  top-[0] z-[5] w-[80%] h-[80%] sm:hidden">
        {/* <img
          src={mohit}
          alt="mohit"
          className="absolute top-[-10%] left-[-50%]  md:w-[0] sm:w-[0] animate-clouds"
        /> */}
        <img
          src={Clouds1}
          alt="cloud"
          className="absolute top-[5%] left-[-50%] animate-clouds sm:hidden"
        />
      </div>
      <div className="absolute right-0 top-[0] z-[5] w-[100%] h-[100%] sm:hidden">
        {/* <img
          src={juhi}
          alt="juhi"
          className="absolute top-[-8%] sm:h-[35%] xsm:right-[-17%] h-[20%] w-[40%] sm:w-[35%] right-[-8%]  sm:right-[-5%]  md:w-[0]  animate-clouds"
        /> */}
        <img
          src={Clouds1}
          alt="cloud"
          className="absolute top-[2%] sm:top-[5%] w-[80%] sm:w-[90%] sm:h-[30%] right-[-32%] animate-clouds"
        />
      </div>
      <div className="flex-1 sm:w-1/2 lg:w-1/4 mt-4 rounded-lg -mt-[10%] ">
        <div className="comic-button-container">
          {/* <button className="comic-button">Events</button> */}
        </div>

        <div className="flex justify-between  flex-wrap ">
          <Link
            to="/culravOpening"
            className="flex justify-center ml-0 w-full sm:w-1/2  lg:w-auto z-[10]"
          >
            <div className="relative w-full h-60 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:h-[400px] xl:w-[500px]">
              <img
                src={Culrav}
                alt="Culrav"
                className="w-100% h-100% object-cover rounded-lg hover:scale-125 transition duration-300 ease-in-out"
              />
            </div>
          </Link>
          <Link
            to={"/avishkar"}
            className="p-0 flex justify-center ml-0 w-full sm:w-1/2  lg:w-auto z-[10]"
          >
            <div className="relative w-full mb-10 h-70 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:h-[400px] xl:w-[500px] ">
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
