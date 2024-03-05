import React, { useState, useEffect } from "react";
import "./AvishkarLanding.css";
// import Nav from "./TemplateComponents/Nav";
// import { useParams } from "react-router-dom";
import avishkarData from "../../../Data/Event/Avishkar";
import EventsComputer from "./eventsComputer";
import Navbar from "../Navbar";
const AvishkarLanding = () => {
  return (
    <div
      className="absolute top-0 bottom-0 left-0 h-full overflow-scroll  w-full bg-opacity-90 flex flex-col"
      // style={{ backgroundColor: "#090D00" }}
      // style={{
      //   backgroundImage: "linear-gradient(to bottom, #0099ff, #66ccff)",
      //   backgroundColor: "#090D00",
      // }}
      style={{
        background:
          "linear-gradient(to bottom, #d95f3b, #f0984a, #fcd6a5, #7aa9a3, #338f9a, #1c4c70)",
      }}
    >
      <div>
        <Navbar />
      </div>
      {/* <div className="custom-class text-center justify-center">
        <div>
          <p className="avishkar_title">
            The Technical Fest of MNNIT , Allahabad
            <span>Avishkar</span>
          </p>
        </div>
      </div> */}
      <div className=" w-full h-full flex flex-wrap p-4 pt-20">
        <h1
          className="w-full text-3xl font-bold mb-10 mt-5 text-center font-serif"
          style={{ fontFamily: "Libre Bodoni, serif" }}
        >
          Events
        </h1>

        <div className="relative flex flex-wrap justify-evenly w-full">
          {avishkarData.map((data) => {
            return (
              <div className="mb-8 mr-6 ml-6 relative">
                <EventsComputer data={data} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AvishkarLanding;
