// import styles from "../../style";
import { Link } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import "./Nav.css";

// <div className="max-w-screen-xl px-4 py-2 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
// <div className="flex flex-col justify-center -mx-5 -my-2 text-xl font-bold">

// </div>

const Footer = () => (
  <div
    className="w-full h-full flex flex-col text-center m-0 bottom-0 mt-28"
    style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
  >
    <div className="flex w-full mt-4 h-full md:flex-row flex-col p-5 ">
      <div className="w-full md:w-[70%] flex flex-col justify-center p-5">
        <div className="lg:text-[1.6em] md:text-[1.4em] text-[1.2rem] flex font-Robo flex-wrap justify-center mb-2 text-center  text-white font-bold rumoura-font">
          {" "}
          Motilal Nehru National Institute of Technology Allahabad
        </div>
        <div className="lg:text-[1.6em] md:text-[1.4em] text-[1.2rem] font-Robo flex flex-wrap justify-center text- text-center  font-bold rumoura-font text-white">
          {" "}
          Prayagraj , India
        </div>
      </div>
      <div className="w-full md:w-[30%]  flex flex-col gap-2  md:mt-4">
        <div className=" flex flex-wrap gap-2 md:justify-start justify-center items-center text-center  w-full ">
  
          <Link
            to="mailto:culrav@mnnit.ac.in"
            className="hover:text-orange-600 font-Robo text-white lg:text-[1.4em] md:text-[1.2em] text-[1rem] font-bold"
          >
            culrav@mnnit.ac.in
          </Link>
        </div>
        <div className=" flex flex-wrap gap-2 md:justify-start justify-center items-center text-center  w-full ">
         
          <Link
            to="mailto:avishkar@mnnit.ac.in"
            className="hover:text-orange-600 font-Robo lg:text-[1.4em] md:text-[1.2em] text-[1rem] text-white font-bold"
          >
            avishkar@mnnit.ac.in
          </Link>
        </div>
      </div>
    </div>
    <div>
      <h6 className="mt-2  text-base leading-6 font-Robo text-center text-white text-[1.2rem] rumoura-font">
        Copyright Ⓒ 2024 MNNIT. All Rights Reserved.
      </h6>
    </div>
  </div>
);

export default Footer;
