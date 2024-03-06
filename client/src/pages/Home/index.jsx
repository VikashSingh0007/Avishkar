import { useEffect, useState } from "react";
import styles from "../../style.js";
import HomePageLayout from "./HomePageLayout.jsx";
import PastPerformance from "./PastPerformance.jsx";
import About from "./AboutUs.jsx";
import AboutAvishkarCulrav from "./AboutAvishkarCulrav.jsx";
import Sponsors from "./Sponsors.jsx";
import AvishkarCulrav from "./AvishkarCulrav.jsx";
import EventTimeLine from "./EventTimeline.jsx";

import Gallery from "./Gallery.jsx";
import { toast } from "react-toastify";

import Navbar from "./Navbar.jsx";
const App = () => {
  return (
    <>
      {/* <AvishkarCard /> */}

      <HomePageLayout>
        {/* <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
         
        </div>
      </div> */}

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <AvishkarCulrav />
            <About />
            <AboutAvishkarCulrav />
          </div>
        </div>

        <EventTimeLine />
        <Gallery />
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}> {/* <Gallery /> */}</div>
        </div>
        <PastPerformance />
        <Sponsors />
      </HomePageLayout>
    </>
  );
};

export default App;
