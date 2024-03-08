import React, { useState, useEffect } from "react";
import "./AvishkarLanding.css";
import { BsJoystick } from "react-icons/bs";
// import Nav from "./TemplateComponents/Nav";
// import { useParams } from "react-router-dom";
import avishkarData from "../../../Data/Event/Avishkar";
import EventsComputer from "./eventsComputer";
import Navbar from "../Navbar";
const AvishkarLanding = () => {
  return (
    <div
      className="absolute top-0 bottom-0 left-0  overflow-scroll  w-full h-full bg-opacity-90 flex flex-col"
      // style={{ backgroundColor: "#090D00" }}
      // style={{
      //   backgroundImage: "linear-gradient(to bottom, #0099ff, #66ccff)",
      //   backgroundColor: "#090D00",
      // }}
      style={{
        background:
          // "linear-gradient(to bottom, #d95f3b, #f0984a, #fcd6a5, #7aa9a3, #338f9a, #1c4c70)",
          "linear-gradient(to bottom, #34626C, #839B97, #CFD3CE, #C6B497, #1c4c70)",
      }}
    >
      <Navbar page="Avishkar"/>

      {/* <div className="custom-class text-center justify-center">
        <div>
          <p className="avishkar_title">
            The Technical Fest of MNNIT , Allahabad
            <span>Avishkar</span>
          </p>
        </div>className="flex text-black justify-center pt-24 text-4xl font-bold rumoura-font"
      </div> */}

      <div>
        <h1 className="w-fit flex mx-auto text-4xl font-bold mb-10 mt-24  text-center  rumoura-font">
          <BsJoystick
            size={32}
            className="hover:rotate-45 transition-all duration-300 mr-2 mt-[1.5px]"
          />{" "}
          Events
        </h1>
      </div>

      <div className="relative flex flex-wrap justify-evenly w-full">
        {avishkarData.map((data,index) => {
          return (
            <div key={index} className=" mb-8 mr-6 ml-6 relative">
              <EventsComputer data={data} />
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AvishkarLanding;
