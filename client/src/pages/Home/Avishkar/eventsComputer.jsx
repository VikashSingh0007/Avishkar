import React, { useEffect, useState } from "react";
import "./AvishkarLanding.css";
import Avishkar from "../culrav/assets/avishkarlogo.png";
import $ from "jquery"; // Import jQuery if not already imported
import { Link } from "react-router-dom";
const EventsComputer = ({ data }) => {
  const eventName = data.event;
  const eventInfo = data.info;
  const [screenState, setScreenState] = useState("off");
  const [isCentralUnitOn, setIsCentralUnitOn] = useState(false);
  const [centralUnitButtonClass, setCentralUnitButtonClass] = useState(
    "computerButton computerButtonOff"
  );

  // console.log(screenState);

  useEffect(() => {
    let initialized = false;

    const initialize = () => {
      if (!initialized) {
        const screen = $(".output");
        const light = $(".screenBox .powerLight");
        const computerButton = $(".computerButton");
        const centralUnitLight = $(".computer .powerLight");

        const screenObj = new Screen(screen, light);
        const centralUnitObj = new CentralUnit(
          computerButton,
          centralUnitLight
        );
        const computerObj = new Computer(centralUnitObj, screenObj);

        $(".screenBox .powerButton").on("click", function () {
          computerObj.startScreen();
        });

        $(".computerButton").on("click", function () {
          computerObj.startCentralUnit();
        });

        computerObj.startScreen();

        setTimeout(() => {
          computerObj.startCentralUnit();
        }, 300);

        return () => {
          $(".screenBox .powerButton").off("click");
          $(".computerButton").off("click");
        };

        initialized = true;
      }
    };

    initialize();
  }, []);

  class Hardware {
    constructor(light) {
      this.light = light;
      this.state = "off";
    }

    on() {
      this.state = "on";
      this.light.removeClass("lightOff");
      this.light.addClass("lightOn");
    }

    off() {
      this.state = "off";
      this.light.removeClass("lightOn");
      this.light.addClass("lightOff");
    }

    isOn() {
      return this.state === "on";
    }

    power() {
      if (this.isOn()) {
        this.off();
      } else {
        this.on();
      }
    }
  }

  class Screen extends Hardware {
    constructor(output, light) {
      super(light);
      this.output = output;
      this.output.hide();
      this.output.parent().removeClass("screenEffect");
      this.noSignalMode = false;
    }

    power(centralUnit, callback) {
      if (this.isOn()) {
        this.off();
        callback(true);
      } else {
        const screen = this;
        let connection = false;
        this.on(function () {
          if (!centralUnit.isOn()) {
            screen.noSignal();
            callback(connection);
          } else {
            if (centralUnit.isBoot()) {
              centralUnit.terminal(screen);
            }
            connection = true;
            callback(connection);
          }
        });
      }
    }
  }

  class CentralUnit extends Hardware {
    constructor(button, light) {
      super(light);
      this.button = button;
      this.bootStatus = false;
    }

    on(screen, callback) {
      super.on();
      this.button.removeClass("computerButtonOff");
      this.button.addClass("computerButtonOn");
      // screen.connect(function () {
      //   callback();
      // });
    }

    off(screen) {
      super.off();
      this.button.removeClass("computerButtonOn");
      this.button.addClass("computerButtonOff");
    }

    power(screen) {
      if (this.isOn()) {
        this.off(screen);
        if (screen.isOn()) {
          screen.output.delay(300).queue(function (next) {
            next();
            screen.noSignal();
          });
        }
      } else {
        const centralUnit = this;
        this.on(screen, function () {
          centralUnit.boot(screen);
        });
      }
    }
  }

  class Computer {
    constructor(centralUnit, screen) {
      this.centralUnit = centralUnit;
      this.screen = screen;
      this.connection = false;
    }

    startScreen() {
      const computer = this;
      this.screen.power(this.centralUnit, function (connection) {
        computer.connection = connection;
      });
    }
    startCentralUnit() {
      const centralUnitButton = $(".computerButton"); // Select the central unit button element

      const computer = this; // Store reference to 'this' for later use inside setTimeout

      // Delay the execution using setTimeout
      setTimeout(function () {
        computer.centralUnit.power(computer.screen);
      }, 300); // 300 milliseconds delay
    }
  }
  // console.log("heklo", data.info[0].BgImageLink);
  return (
    <div className="relative w-auto  flex flex-col justify-center items-center">
      <div className="screenBox">
        <div className="frame">
          <div className="screenBox2 ">
            <div className="screenBox3 flex text-center items-center">
              <div className="screen relative">
                <span className="absolute left-0 w-full  text-2xl opacity-100 top-4 z-[1] rumoura-font ">
                  {/* {eventName} */}
                </span>
                <div className="absolute top-0 z-[0]">
                  {/* <Link
                    href={`/AvishkarEvent/${encodeURIComponent(
                      JSON.stringify(data)
                    )}`}
                  > */}
                  <Link
                    to={`/AvishkarEvent/${encodeURIComponent(
                      JSON.stringify(data)
                    )}`}
                  >
                    <img
                      className=""
                      src={data.info[0].BgImageLink}
                      style={{ width: "250px", height: "190px" }} // Adjust the width and height
                    />
                  </Link>

                  {/* </Link> */}
                </div>
              </div>
            </div>
          </div>
          <div className="bottomFrame">
            <div className="fan"></div>
            <img
              src={Avishkar}
              alt="Avishkar"
              className="logo -mt-[18.5px] -ml-[6px] w-14 h-14 object-cover rounded-lg hover:scale-150 transition duration-300 ease-in-out"
            />
            <div className="powerButton">
              <div className="powerIcon"></div>
            </div>
            <div
              className={`powerLight ${
                screenState === "on" ? "lightOn" : "lightOn"
              }`}
            ></div>
          </div>
        </div>
      </div>
      <div className="screenFoot"></div>
      <div className="computer">
        <div className="computerFrame">
          <div className="computerFan1"></div>
          <div className="computerFan2"></div>
          <div className="screw1"></div>
          <div className="screw2"></div>
          <div className="computerFrame2">
            <div className="floppy">
              <div className="fingerGrip"></div>
              <div className="slot"></div>
            </div>
            <div className="socket1"></div>
            <div className="socket2"></div>
          </div>
          <div className="screw3"></div>
          <div className="screw4"></div>
          <div className="screw5"></div>
          <div className="powerButton">
            <div className="">
              <div className={centralUnitButtonClass}></div>
            </div>
            <div className="offIndicator"></div>
            <div className="onIndicator"></div>
          </div>
          <div
            className={`powerLight ${isCentralUnitOn ? "lightOn" : "lightOn"}`}
          ></div>
        </div>
      </div>

      <Link
        to={`/AvishkarEvent/${encodeURIComponent(JSON.stringify(data))}`}
        className="flex items-center justify-center cursor-pointer"
      >
        <p
          className="text-3xl text-white w-full mt-2 rumoura-font"
          style={{ textShadow: "0px 0px 10px black" }}
        >
          Explore !
        </p>
      </Link>
    </div>
  );
};

export default EventsComputer;
