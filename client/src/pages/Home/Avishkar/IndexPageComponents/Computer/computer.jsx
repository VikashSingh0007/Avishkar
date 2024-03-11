import { useState } from "react";
import computerScreen from "./components/images/computer_screen.jpg";
import switches from "./components/images/switches.jpg";
import DeskTopScreen from "./components/desktopScreen";
import ToolBar from "./components/toolBar";
import EventsScreen from "./components/eventsScreen";
import computerFrame from "./components/images/computerFrame.png";
// import video from "../../../../../assets/Final.mp4";
// import vintageImg from "./components/images/vintageBackground.jpg";
// import Keyboard from "./components/images/keyboard.jpg";
import comp_component from "./components/images/comp_component.jpg";
import startMenuImg from "./components/images/startMenu.png";
import SandClock from "../../../../../Animations/sandClock";
import PowerOnButton from "../../../../../Animations/powerOnButton";
import { useNavigate } from "react-router-dom";

const Computer = () => {
  const [computerOn, setComputerOn] = useState(false);
  const [currScreen, setCurrentScreen] = useState("desktop");
  const [startMenu, setStartMenu] = useState(false);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const switchOn = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // setLoader(true);
    // setTimeout(() => {
    //   setLoader(false);
    // }, 1000);

    // setComputerOn(!computerOn);
    // if (computerOn) {
    //   setCurrentScreen("desktop");
    //   setStartMenu(false);
    // }
    navigate("/avishkar-landing");
  };

  const switchMenu = () => {
    setStartMenu(!startMenu);
  };

  const unSelectFolder = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const changeScreen = (screen) => {
    if (screen === "events" || screen === "desktop") {
      setCurrentScreen(screen);
    }

    console.log("screen changed");
  };

  console.log(currScreen);
  console.log(loader);

  return (
    <div
      className={` relative ${
        computerOn ? "relative sm:absolute sm:top-1/2 lg:top-5" : "relative"
      } flex flex-col justify-center w-full top-0 items-center transition-all duration-500  ${
        computerOn ? "w-[100%]" : "w-[70%]"
      } ${loader == true ? "w-screen" : ""} `}
    >
      <div
        className={`relative overflow-hidden h-[80%] w-[80%] ${
          currScreen === "desktop" ? null : "bg-white"
        } items-center rounded-[7.5%]`}
      >
        {currScreen === "desktop" && computerOn && loader == false && (
          <div className="absolute">
            <img
              src={computerFrame}
              alt="vintageImg"
              className="h-full w-full z-[-1]"
              style={{ filter: "blur(1px)" }}
            />
          </div>
        )}
        {computerOn && loader == false ? (
          <div className="relative z-[2] w-full h-full">
            <img
              src={computerFrame}
              alt="Computer Frame"
              className="h-full w-full"
            />
          </div>
        ) : (
          loader == false && (
            <div className="relative w-full h-full">
              {/* Image */}
              <img
                src={computerScreen}
                alt="Computer screen"
                className="h-full w-full"
              />
              {/* Video */}
              <video
                src="https://res.cloudinary.com/dyn42yyxr/video/upload/v1710138008/kcnofkmhoyjnsduvtyle.mp4"
                autoPlay
                loop
                muted
                className="absolute top-[11%] left-[11%] rounded-xl"
                style={{ width: "77%", height: "77%", objectFit: "cover" }}
              />
            </div>
          )
        )}
        {loader == false && (
          <div className="absolute z-[2] w-full h-full">
            <img
              src={computerFrame}
              alt="Computer Frame"
              className="h-full w-full"
            />
          </div>
        )}
        {currScreen != "desktop" && loader == false && (
          <div className="absolute top-[15%] w-[70%] left-[15%] h-[8%] bg-[#191970] z-[1]"></div>
        )}
        {currScreen != "desktop" && loader == false && (
          <div className="absolute top-[15%] w-[70%] left-[15%] h-[8%] z-[5]">
            <div className="absolute left-[5%] bottom-[5%] text-white font-bold text-[90%]">
              {currScreen === "events" ? "Avishkar" : null}
            </div>
            <div
              className="z-[6] absolute h-[55%] bottom-[5%] rounded-sm w-[5%] right-[6%] flex justify-center text-center items-center bg-rose-600"
              onClick={() => {
                changeScreen("desktop");
              }}
            >
              <svg
                className="w-[100%] relative left-1 h-[100%] text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18 18 6m0 12L6 6"
                />
              </svg>
            </div>
          </div>
        )}
        {computerOn && loader == false && (
          <div className="absolute bottom-[15%] w-[70%] left-[15%] h-[12%] bg-[#1434A4] z-[1]"></div>
        )}

        {computerOn && loader == false && (
          <div className="absolute h-full top-0 left-0 w-full rounded-[10%] z-[3]">
            <div
              className=" h-[70%] w-[71%] relative top-[15.5%] left-[15%] flex flex-col "
              onClick={unSelectFolder}
            >
              <div className="h-[83%] w-[100%] flex ">
                {currScreen === "desktop" ? (
                  <DeskTopScreen changeScreen={changeScreen} />
                ) : (
                  <EventsScreen />
                )}
              </div>

              <div className="w-[100%] h-[12%] z-[2] ">
                {computerOn && startMenu && (
                  <div className="absolute h-[60%] top-[26.5%] left-[1%] w-[30%]  z-[-1]">
                    <img
                      src={startMenuImg}
                      alt="startMenu"
                      className="object-fit h-full w-full"
                    />
                    <div
                      className="w-[40%] h-[15%] absolute right-[5%] bottom-0 cursor-pointer"
                      onClick={switchOn}
                    ></div>
                  </div>
                )}
                <ToolBar switchMenu={switchMenu} computerOn={computerOn} />
              </div>
            </div>
          </div>
        )}
      </div>
      {loader && (
        <div className="">
          <SandClock />
        </div>
      )}
      {loader == false && (
        <>
          <div className="relative flex justify-center w-[50%] rounded-bl-[20%] rounded-br-[25%] overflow-hidden ">
            <img src={switches} alt="Switches" className="h-[100%]" />
            <div
              className="absolute h-[70%] w-[9%] z-[10] right-[3.5%] top-[12%] rounded-full cursor-pointer"
              onClick={switchOn}
            >
              <PowerOnButton />
            </div>
          </div>
          <div className="relative flex justify-center w-[30%] rounded-bl-[20%] rounded-br-[25%] overflow-hidden ">
            <img src={comp_component} alt="Switches" className="h-[100%]" />
            <div
              className="absolute h-[65%] w-[9%] z-10 right-[4%] top-[15%] rounded-full"
              onClick={switchOn}
            ></div>
          </div>
          {/* <div className=" relative flex justify-center full rounded-tl-[10%] rounded-tr-[10%] overflow-hidden ">
            <img src={Keyboard} alt="Switches" className="h-[100%]" />
            <div
              className="absolute h-[65%] w-[9%] z-10 right-[4%] top-[15%] rounded-full"
              onClick={switchOn}
            ></div>
          </div> */}
        </>
      )}
    </div>
  );
};

export default Computer;
