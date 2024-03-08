import React, { useState } from "react";
import "./rangmanchCarousel.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import EventCard from "../../Avishkar/TemplateComponents/EventCard";
import Footer from "../../Footer";
import retroImg from "../../assets/blocks.jpg";

import Navbar from "../../Navbar";
const Carousel = ({}) => {
  const { data } = useParams();
  const Data = JSON.parse(decodeURIComponent(data));
  console.log(Data.info[0]);
  return (
    <div className="flex flex-col containerEvents">
      <div className="absolute z-[-1] top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="fixed left-0 w-full h-full flex justify-center items-center">
          {/* <div className="absolute  transform -translate-x-1/2 -translate-y-1/2"> */}
          <img
            src={retroImg}
            alt="mnnitImg"
            className=" object-cover w-full h-full"
          />
          {/* </div> */}
        </div>
      </div>
      <div className="h-screen overflow-y-scroll flex flex-col mb-10 ">
        <div>
          <Navbar style={{ zIndex: -4 }} />
        </div>
        {/* <div className=" w-full h-full flex flex-wrap p-4"> */}
        <div className=" ">
          <h1
            className="w-full text-[2rem] sm:text-[3rem] tracking-wider text-white  font-bold mb-10 mt-5 pt-20 text-center rumoura-font"
            style={{
              fontWeight: "bolder",
              textAlign: "center",
              textShadow: "0 0 10px black", // Add white shadow with 10px blur
            }}
          >
            Events
          </h1>

          <div className="flex justify-center align-middle mt-[60%]  xsm:mt-[60%] sm:mt-[35%] md:mt-[35%] lg:mt-[20%] xl:mt-[15%] h-full ">
            <div className="grid grid-cols-1  justify-center mb-10 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3  gap-y-[60%]  gap-x-[350px] md:gap-x-[350px] md:gap-y-[60%]  lg:gap-x-[350%]  lg:gap-y-[75%] xl:gap-y-[600px] xl:gap-x-[500px]       ">
              {/* <div className="flex flex-wrap gap-20"> */}
              {Data.info[0].events.map((data, index) => {
                return (
                  <div className="mb-5 mt-4 mr-4 ml-4 relative " key={index}>
                    <EventCard data={data} style={{ zIndex: 2 }} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* <Footer /> */}
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Carousel;
