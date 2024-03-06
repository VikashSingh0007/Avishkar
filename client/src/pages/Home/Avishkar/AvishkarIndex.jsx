import React, { useEffect, useRef } from "react";
import "./AvishkarIndex.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
// import computerScreen from "./components/images/computer_screen.jpg";
// import Tv from "./assets/television1.png";
// import video from "../../../assets/culrav.mp4";
import { Link } from "react-router-dom";
// import video from "./../../../../../assets/Final.mp4";
const CulravLAnding = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #d95f3b, #f0984a, #fcd6a5, #7aa9a3, #338f9a, #1c4c70)",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="flex flex-col lg:flex-row md:flex-col sm:flex-col ">
        <Navbar />
        <div className="flex mt-24">
          <div className="content">
            <div className="music">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="legs">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="turntable"></div>
            <div className="disc"></div>
            <div className="vinyl"></div>
            <div className="name"></div>
            <div className="wheel"></div>
            <div className="buttons">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="group">
              <div className="circle"></div>
              <div className="arm"></div>
              <div className="arm"></div>
              <div className="head"></div>
            </div>
            <div className="towers">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div className="mt-[10%] ml-[5%] mr-[5%]">
          <div className="flex justify-center text-2xl py-4 text-4xl font-semibold rumoura-font underline">
            AVISHKAR
          </div>
          <div className="flex justify-center text-2xl py-4 text-2xl font-semibold rumoura-font ">
            Ideate, Innovate, Create
          </div>
          <div className="flex justify-center py-4 px-6 kelly-slab-regular text-xl ">
            <h4 className="text-xl sm:text-xl text-justify">
              Avishkar, a 3-day-long annual Techno-Management Fest of MNNIT
              Allahabad is an array of mind boggling events, the festival aims
              to nurture the budding talents of the nation. It provides a
              platform to the young engineers and managers to hone their
              techno-managerial skills on a much-branded-canvas.
            </h4>
          </div>
          <div className="flex justify-center items-center">
            <Link to="/avishkar-landing">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Events
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CulravLAnding;
