import React, { useState } from "react";
import "./rangmanchCarousel.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import EventCard from "./EventPageCulrav";
import Footer from "../../Footer";
import retroImg from "../../assets/blocks.jpg";

import Navbar from "../../Navbar";
const Carousel = ({}) => {
  const { data } = useParams();
  const Data = JSON.parse(decodeURIComponent(data));

  console.log(Data)

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

          <div className="flex justify-center align-middle mt-[60%]  xsm:mt-[60%] sm:mt-[30%] md:mt-[30%] lg:mt-[20%] xl:mt-[10%] h-full ">
            <div className="p-2  justify-center mb-10 flex flex-wrap gap-x-[5%] gap-y-[10%]  ">
              {Data.info[0].events.map((data, index) => {
                return (
                  <div key={index} className="mb-5 mr-4 ml-4 ">
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
