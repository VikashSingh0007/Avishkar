import { useEffect, useState } from "react";
import "./index.css";
import styles from "../../style.js";
import Fog from "../../Animations/fog.jsx";
import MusicDisc from "../../Animations/musicDisc.jsx";
import { useNavigate } from "react-router-dom";
import vintage11 from "../../assets/vintage12.png";
import video from "../../assets/FINAL1.mp4";
import Navbar from "./Navbar.jsx";
import Clouds1 from "./culrav/assets/clouds11.png";
import Clouds2 from "./culrav/assets/clouds2.png";
import Clouds3 from "./culrav/assets/clouds3.png";
import Mohit from "./culrav/assets/mohit.png";
import juhi from "./culrav/assets/juhi.png";

const App = () => {
  const navigate = useNavigate();

  function redirectPage(page) {
    navigate(`/${page}`);
  }

  return (
    <>
      <div className="relative">
        <div className="flex items-center justify-center h-full w-full rounded">
          <div className="w-full relative" style={{ paddingTop: "56.25%" }}>
            <div className="  bg-gradient-to-b from-transparent to-black opacity-75"></div>
            <video
              src={video}
              autoPlay
              loop
              muted
              className="absolute top-0 left-0 w-full h-full rounded"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />

            {window.innerWidth > 640 && (
              <div>
                {" "}
                <img
                  src={Mohit}
                  className="absolute  bottom-[-7%] left-[-2%] lg:w-[600px] md:w-[0] sm:w-[0] animate-clouds"
                  style={{ zIndex: 1 }}
                  loading="lazy"
                />
                <img
                  src={juhi}
                  className="absolute  bottom-[-4%] right-[-0%] lg:w-[400px] md:w-[0] sm:w-[0] animate-clouds"
                  style={{ zIndex: 1 }}
                />
                <div className="absolute bottom-[-13%] left-0 w-full hidden md:block">
                  <img
                    src={Clouds2}
                    className="absolute bottom-[-10%] left-[-8%] lg:w-[450px] md:w-[0] sm:w-[0] animate-clouds"
                    style={{ zIndex: 2 }}
                  />
                  <img
                    src={Clouds1}
                    className="absolute bottom-[50%] left-10 lg:w-[400px] md:w-[0] sm:w-[0] animate-clouds"
                    style={{ zIndex: 2 }}
                  />
                  <img
                    src={Clouds3}
                    className="absolute bottom-0 right-0 lg:w-[300px] md:w-[0] sm:w-[0] animate-clouds"
                    style={{ zIndex: 2 }}
                  />
                  <img
                    src={Clouds1}
                    className="absolute bottom-0 right-[-2%] lg:w-[400px]  md:w-[0] sm:w-[0] animate-clouds"
                    style={{ zIndex: 2 }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
