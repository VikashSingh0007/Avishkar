import { useEffect, useState } from "react";
import styles from "../../style.js";
import HomePageLayout from "./HomePageLayout.jsx";
import PastPerformance from "./PastPerformance.jsx";
import About from "./AboutUs.jsx";
import AboutAvishkarCulrav from "./AboutAvishkarCulrav.jsx";
import Sponsors from "./Sponsors.jsx";
import AvishkarCulrav from "./AvishkarCulrav.jsx";
import EventTimeLine from "./EventTimeline.jsx";
import FAQ from "./FAQ.jsx";

import Gallery from "./Gallery.jsx";
import { toast } from "react-toastify";
import Navbar from "./Navbar.jsx";
import Clock from "../../assets/clockVintage.png";


const App = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="fixed left-0 w-full h-full flex justify-center items-center">
          {/* <div className="absolute  transform -translate-x-1/2 -translate-y-1/2"> */}
          <img src={Clock} alt="mnnitImg" className=" object-cover w-full h-full" />
          {/* </div> */}
        </div>

        <div className="z-2 absolute w-full h-full ">
          <HomePageLayout>
            <div
              className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}
            >
              <div className={`${styles.boxWidth}`}>
                <AvishkarCulrav />
                <About />
                <AboutAvishkarCulrav />
              </div>
            </div>

            <EventTimeLine />
            <Gallery />
            <div
              className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}
            >
              <div className={`${styles.boxWidth}`}> </div>
            </div>
            <PastPerformance />
            <Sponsors />
          </HomePageLayout>
        </div>
      </div>
    </>
  );
};

export default App;
