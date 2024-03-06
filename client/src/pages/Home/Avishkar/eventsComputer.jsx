import React, { useEffect, useState } from "react";
import "./AvishkarLanding.css";
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
  const [isCentralUnitClicked, setIsCentralUnitClicked] = useState(true);
  const [powerState, setPowerState] = useState(true);
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
      screen.connect(function () {
        callback();
      });
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
  return (
    <div className="relative w-auto  flex flex-col justify-center items-center">
      <div className="screenBox">
        <div className="frame">
          <div className="screenBox2 ">
            <div className="screenBox3 flex text-center items-center">
              <div
                className="screen relative"
                style={{
                  backgroundColor: isCentralUnitClicked
                    ? powerState
                      ? "transparent"
                      : "gray"
                    : "black",
                }}
              >
                <span
                  hidden={!powerState}
                  className="absolute left-0 w-full  text-2xl opacity-100 top-4 z-[1] rumoura-font "
                >
                  {eventName}
                </span>
                <div className="absolute top-0 z-[0]">
                  {/* <Link
                    href={`/AvishkarEvent/${encodeURIComponent(
                      JSON.stringify(data)
                    )}`}
                  > */}
                  <img
                    className=""
                    hidden={!(powerState && isCentralUnitClicked)}
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/125707/sidebar-bg.png"
                    alt="Event Cover"
                  />
                  {/* </Link> */}
                </div>
              </div>
            </div>
          </div>
          <div
            className="bottomFrame"
            onClick={() => setPowerState(!powerState)}
          >
            <div className="fan"></div>
            <img
              className="logo"
              src="http://www.icone-png.com/png/52/51692.png"
              alt="logo"
            />
            <div className="powerButton">
              <div className="powerIcon"></div>
            </div>
            <div
              className={`powerLight ${
                screenState === "on" ? "lightOff" : "lightOn"
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
            <div className="buttonSlide">
              <div
                onClick={() => {
                  setIsCentralUnitClicked(!isCentralUnitClicked);
                  setPowerState(!powerState);
                }}
                className={centralUnitButtonClass}
              ></div>
            </div>
            <div className="offIndicator"></div>
            <div className="onIndicator"></div>
          </div>
          <div
            className={`powerLight ${isCentralUnitOn ? "lightOn" : "lightOff"}`}
          ></div>
        </div>
      </div>

      <Link
        to={`/AvishkarEvent/${encodeURIComponent(JSON.stringify(data))}`}
        className="flex items-center justify-center cursor-pointer"
      >
        <p className="text-3xl text-black w-full mt-2 rumoura-font">
          Explore !
        </p>
      </Link>
    </div>
  );
};

export default EventsComputer;
