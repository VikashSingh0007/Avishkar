// import Computer from "./IndexPageComponents/Computer/computer";
// import GlowText from "../../../Animations/glowText";
// import Terminal from "./IndexPageComponents/terminal";
// import Card from "../../../Animations/card";
// import Navbar from "../Navbar";
// // import back_img from "./avishkar_background.png";
// import { useParams } from "react-router-dom";

// const AvishkarIndex = () => {
//   const divStyle = {
//     // backgroundImage: `url(${back_img})`,
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
//   };

//   const e1 = [
//     { id: 1, title: "CyberQuest" },
//     { id: 2, title: "Electromania" },
//     { id: 3, title: "Kredomania" },
//   ];
//   const e2 = [
//     { id: 5, title: "Robomania" },
//     { id: 6, title: "Nirman" },
//     { id: 7, title: "Genesis" },
//   ];
//   const e3 = [
//     { id: 4, title: "Rasayans" },
//     { id: 8, title: "Mechrocosm" },
//     { id: 12, title: "Oligopoly" },
//   ];
//   const e4 = [
//     { id: 9, title: "Gnosiomania" },
//     { id: 10, title: "Monopoly" },
//     { id: 11, title: "PowerSurge" },
//   ];
//   const e5 = [{ id: 13, title: "Aerodynamics" }];
//   return (
//     <div>
//       <div
//         className="flex flex-col overflow-hidden md:hidden "
//         style={divStyle}
//       >
//         <div className="flex flex-row justify-center h-[20%] w-full items-center p-2 mt-2">
//           <GlowText />
//         </div>
//         <div className="flex flex-wrap h-[80%]  justify-center items-center   overflow-hidden mt-5 pt-[7]">
//           {" "}
//           <div className="m-5">
//             <Card events={e1} />
//           </div>
//           <div className="m-5">
//             <Card events={e2} />
//           </div>
//           <div className="m-5">
//             <Card events={e3} />
//           </div>
//           <div className="m-5">
//             <Card events={e4} />
//           </div>
//           <div className="m-5">
//             <Card events={e5} />
//           </div>
//         </div>
//       </div>
//       <div
//         className="absolute flex-col top-0 left-0 w-full h-full hidden md:flex"
//         style={{
//           background:
//             "linear-gradient(to bottom, #d95f3b, #f0984a, #fcd6a5, #7aa9a3, #338f9a, #1c4c70)",
//         }}
//       >
//         <Navbar />
//         <div className="flex justify-center h-auto mb-[3%] pt-20 mt-[2%] w-full bg-transparent">
//           <GlowText />
//         </div>
//         <div className="h-full flex flex-col-reverse justify-center items-center lg:flex-row w-full overflow-hidden">
//           <div className=" z-[1] lg:top-[10%] lg:w-[55%] w-full flex lg:h-full h-[70%]">
//             <Computer />
//           </div>
//           <div className="right-[5%] lg:top-[10%] md:h-[170vh] lg:h-[100vh] w-full lg:w-[60%] flex justify-center items-center p-[10%] h-[5%]">
//             <Terminal />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AvishkarIndex;
import React, { useEffect, useRef } from "react";
import "./AvishkarIndex.css";
import Computer from "./IndexPageComponents/Computer/computer";
import Navbar from "../Navbar";
import Footer from "../Footer";

import { Link } from "react-router-dom";

const CulravLAnding = () => {
  return (
    <div
      style={{
        backgroundImage:
          // "linear-gradient(to bottom, #d95f3b, #f0984a, #fcd6a5, #7aa9a3, #338f9a, #1c4c70)",
          "linear-gradient(to bottom, #34626C, #839B97, #CFD3CE, #C6B497, #1c4c70)",
        backgroundAttachment: "fixed",
      }}
      className="absolute top-0 left-0 h-auto flex flex-col"
    >
      <div className="flex xl:flex-row flex-col">
        <Navbar />
        <div className="flex mt-24">
          <Computer />
        </div>
        <div className="mt-[10%] ml-[5%] mr-[5%]">
          <div className="flex justify-center text-2xl py-4 text-4xl font-semibold rumoura-font underline">
            AVISHKAR
          </div>
          <div className="flex justify-center text-2xl py-4 text-2xl font-semibold rumoura-font ">
            Ideate, Innovate, Create
          </div>
          <div className="flex justify-center py-4 px-6 kelly-slab-regular text-xl ">
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
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Events
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative  h-auto">
        <div className="bottom-0 w-full mb-2 ">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default CulravLAnding;
