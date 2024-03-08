import "./CulravLanding.css";
import EventCard from "./Components/EventCard";
import Data from "../../../Data/Event/Culrav";
import Navbar from "../Navbar";
import { MdOutlineFestival } from "react-icons/md";
import reel from "../assets/reel.jpg";
import lightLamp from "../assets/chair.jpg";
import Footer from "../Footer";

const CulravLanding = () => {
  return (
    <div className="containerCulrav">
      <div className="h-screen overflow-y-scroll mb-10 ">
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
        <Navbar page="Culrav" style={{ zIndex: -4 }} />

        <div>
          <div
            className=" text-[2rem] sm:text-[3rem] w-fit flex mx-auto tracking-widest text-4xl font-bold mb-10 mt-24 text-white  text-center  rumoura-font"
            style={{
              fontWeight: "bolder",
              textAlign: "center",
              textShadow: "0 0 20px black", // Add white shadow with 10px blur
            }}
          >
            <MdOutlineFestival
              size={32}
              className="hover:rotate-45  text-black transition-all duration-300 mr-2 mt-[4px]"
              style={{
                fontWeight: "bolder",
                textAlign: "center",
              }}
              fill="white"
            />{" "}
            Events
          </div>
        </div>
        <div className="flex justify-center align-middle mt-[80%]  xsm:mt-[60%] sm:mt-[40%] md:mt-[35%] lg:mt-[20%] xl:mt-[15%] h-full ">
          <div className="p-2 grid grid-cols-1 justify-center mb-10 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3  gap-y-[60%]  gap-x-[350px] md:gap-x-[350px] md:gap-y-[60%]  lg:gap-x-[350%]  lg:gap-y-[75%] xl:gap-y-[600px] xl:gap-x-[500px]       ">
            {/* <div className="flex flex-wrap gap-20"> */}
            {Data.map((data, index) => {
              return (
                <div key={index} className="mb-5 mr-4 ml-4 relative ">
                  <EventCard data={data} style={{ zIndex: 2 }} />
                </div>
              );
            })}
          </div>
        </div>

        {/* <Footer /> */}
      </div>
      <div className="pb-2 ">
        <Footer />
      </div>
    </div>
  );
};

export default CulravLanding;
