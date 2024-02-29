import React, { useState } from "react";
import "./rangmanchCarousel.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import EventCardCulrav from "./EventPageCulrav";

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
      <h1
        className="w-full text-3xl font-bold mb-10 mt-5 text-center font-serif"
        style={{ fontFamily: "Libre Bodoni, serif" }}
      >
        Events
      </h1>

      <div className="flex justify-center align-middle mt-[90%]  xsm:mt-[70%] sm:mt-[30%] md:mt-[45%] lg:mt-[40%] xl:mt-[15%] h-full ">
        <div className="grid grid-cols-1 mb-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-y-[400px]  gap-x-[350px] md:gap-x-[350px] md:gap-y-[550px]  lg:gap-x-[500px]  lg:gap-y-[600px] xl:gap-y-[600px] xl:gap-x-[500px]       ">
          {Data.info[0].events.map((data) => {
            return (
              <div className="mb-5 mr-4 ml-4 relative">
                <EventCardCulrav data={data} style={{ zIndex: 2 }} />
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
