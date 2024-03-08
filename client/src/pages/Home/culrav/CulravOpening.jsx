import React, { useEffect, useRef } from "react";
import "./CulravOpening.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
// import computerScreen from "./components/images/computer_screen.jpg";
// import Tv from "./assets/television1.png";
// import video from "../../../assets/culrav.mp4";
import { Link } from "react-router-dom";
// import video from "./../../../../../assets/Final.mp4";
import reel from "../assets/reel.jpg"
import retroImg from "../assets/Retro_back.jpeg"

const CulravLAnding = () => {
  return (
    <div className="culravOpening containerCulravOpen">
      <div className="absolute z-[-1] top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="fixed left-0 w-full h-full flex justify-center items-center">
          {/* <div className="absolute  transform -translate-x-1/2 -translate-y-1/2"> */}
          <img
            src={reel}
            alt="mnnitImg"
            className=" object-cover w-full h-full"
          />
          {/* </div> */}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row md:flex-col sm:flex-col items-center justify-center">
        <Navbar />
        <div className="flex mt-24 bounce-animation">
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
          <div
            className="flex justify-center tracking-widest text-white text-justify text-[2rem] sm:text-[3rem] py-4 text-4xl font-semibold rumoura-font "
            style={{
              fontWeight: "bolder",
              textAlign: "center",
              textShadow: "0 0 15px black", // Add white shadow with 10px blur
            }}
          >
            Culrav
          </div>
          <div
            className="flex justify-center text-white croissant-one-regular text-[1.5rem] sm:text-[2.5rem] py-4 font-semibold  "
            style={{
              fontWeight: "bolder",
              textAlign: "center",
              textShadow: "0 0 10px black", // Add white shadow with 10px blur
            }}
          >
            Rendezvous with euphoria
          </div>
          <div className="flex justify-center py-4 px-6 kelly-slab-regular text-xl ">
            <div
              className="text-xl sm:text-xl text-[0.95rem] sm:text-[1.4rem] text-white croissant-one-regular text-justify"
              style={{
                fontWeight: "bolder",
                textShadow: "0 0 10px black", // Add white shadow with 10px blur
              }}
            >
              Culrav, a 4-day-long annual cultural extravaganza of MNNIT
              Allahabad, is a vibrant celebration of art, music, And creativity.
              With its diverse range of activities, including pronites featuring
              performances by renowned artists or bAnds, kavsAndhya highlighting
              poetry And literature, And appearances by comedians or big
              figures, Culrav offers entertainment And engagement for all
              attendees.
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Link to="/culravLanding">
              <button
                className="bg-[#63462DE6] hover:bg-[#3c2b1de6] text-white text-[1.5rem] mt-2 sm:text-[1.4rem] font-bold py-2 px-5 rounded-full"
                style={{
                  boxShadow: "0 0 20px black", // Add white shadow with 10px blur
                }}
              >
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
