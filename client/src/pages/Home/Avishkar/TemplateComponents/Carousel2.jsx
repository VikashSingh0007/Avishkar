import React, { useState } from "react";
import "./Carousel2.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import EventCard from "./EventCard";

import Navbar from "../../Navbar";
const Carousel = ({}) => {
  const { data } = useParams();
  const Data = JSON.parse(decodeURIComponent(data));
  console.log(Data.info[0]);
  return (
    <div
      className="h-screen overflow-y-scroll mb-10"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #d95f3b, #f0984a, #fcd6a5, #7aa9a3, #338f9a, #1c4c70)",
        backgroundAttachment: "fixed",
      }}
    >
      <Navbar style={{ zIndex: -4 }} />
      {/* <div className=" w-full h-full flex flex-wrap p-4"> */}
      <h1 className="w-full text-5xl md:text-4xl  font-bold mb-10 mt-5 pt-20 text-center rumoura-font">
        Events
      </h1>

      <div className="flex justify-center align-middle mt-[90%]  xsm:mt-[60%] sm:mt-[35%] md:mt-[35%] lg:mt-[20%] xl:mt-[15%] h-full ">
        <div className="grid grid-cols-1 justify-center mb-10 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3  gap-y-[60%]  gap-x-[350px] md:gap-x-[350px] md:gap-y-[60%]  lg:gap-x-[350%]  lg:gap-y-[75%] xl:gap-y-[600px] xl:gap-x-[500px]       ">
          {/* <div className="flex flex-wrap gap-20"> */}
          {Data.info[0].events.map((data) => {
            return (
              <div className="mb-5 mr-4 ml-4 relative ">
                <EventCard data={data} style={{ zIndex: 2 }} />
              </div>
            );
          })}
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Carousel;
