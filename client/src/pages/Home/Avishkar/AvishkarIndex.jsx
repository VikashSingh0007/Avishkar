import "./AvishkarIndex.css";
import Computer from "./IndexPageComponents/Computer/computer";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import retroImg from "../assets/createEng.jpg";

const AvishkarLanding = () => {
  return (
    <div className="absolute top-0 left-0 h-auto flex flex-col containerAvishkarLanding">
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
      <div className="flex xl:flex-row flex-col h-full">
        <Navbar />
        <div className="flex mt-24 bounce-animation">
          <Computer />
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
            AVISHKAR
          </div>
          <div
            className="flex justify-center text-white croissant-one-regular text-[1.5rem] sm:text-[2.5rem] py-4 font-semibold  "
            style={{
              fontWeight: "bolder",
              textAlign: "center",
              textShadow: "0 0 10px black", // Add white shadow with 10px blur
            }}
          >
            Ideate, Innovate, Create
          </div>
          <div
            className="text-xl sm:text-xl text-[0.8rem] flex flex-wrap sm:text-[1.4rem] text-white croissant-one-regular text-justify"
            style={{
              fontWeight: "bolder",
              textShadow: "0 0 10px black", // Add white shadow with 10px blur
            }}
          >
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
              <button
                className="bg-[#63462DE6] hover:bg-[#3c2b1de6] text-white text-[1rem] mt-3 sm:text-[1.4rem] font-bold py-2 px-5 rounded-full"
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
      <div className="relative h-auto">
        <div className="bottom-0 w-full mb-2 ">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AvishkarLanding;
