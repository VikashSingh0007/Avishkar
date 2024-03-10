import React from "react";
import "./cod.css";
import retroImg from "../Home/assets/radio.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
function CircuitOfTheDay() {
  return (
    <div className="top-0 left-0 w-full h-auto containerPage flex flex-col ">
      <div className="absolute z-[-1] top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="fixed left-0 w-full h-full flex">
          <img
            src={retroImg}
            alt="mnnitImg"
            className=" object-cover w-full h-full "
          />
        </div>
      </div>
      <Navbar />
      <div className="w-full lg:w-[60%] max-w-[90%]">
        <div
          style={{
            backdropFilter: "blur(5px)",
          }}
          // className={blurproperty}
        ></div>
      </div>
    </div>
  );
}

export default CircuitOfTheDay;
