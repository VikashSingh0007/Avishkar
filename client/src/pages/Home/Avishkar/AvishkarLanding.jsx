import React, { useState, useEffect } from "react";
import "./AvishkarLanding.css";
import { BsJoystick } from "react-icons/bs";
// import Nav from "./TemplateComponents/Nav";
// import { useParams } from "react-router-dom";
import avishkarData from "../../../Data/Event/Avishkar";
import EventsComputer from "./eventsComputer";
import Navbar from "../Navbar";
import lamp from "../assets/createEng.jpg";
import Footer from "../Footer";

const AvishkarLanding = () => {
  return (
    <div className="absolute top-0 bottom-0 left-0  overflow-scroll  w-full h-full bg-opacity-90 flex flex-col containerAvishkar">
      <div className="absolute z-[-1] top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="fixed left-0 w-full h-full flex justify-center items-center">
          <img
            src={lamp}
            alt="mnnitImg"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <Navbar page="Avishkar" />

      <div>
        <h1
          className="text-[2rem] flex  sm:text-[3rem] items-center gap-2 text-white w-fit mx-auto bg justify-center font-bold mb-10 mt-24  text-center  rumoura-font"
          style={{
            fontWeight: "bolder",
            textAlign: "center",
            textShadow: "0 0 20px black", // Add white shadow with 10px blur
          }}
        >
          <BsJoystick
            size={40}
            className="hover:rotate-45 transition-all duration-300 mr-2 "
          />{" "}
          Events
        </h1>
      </div>

      <div className="relative flex flex-wrap justify-evenly w-full">
        {avishkarData.map((data, index) => {
          return (
            <div key={index} className=" mb-8 mr-6 ml-6 relative">
              <EventsComputer data={data} />
            </div>
          );
        })}
      </div>
      <div className="pb-0">
        <Footer />
      </div>
    </div>
  );
};

export default AvishkarLanding;
