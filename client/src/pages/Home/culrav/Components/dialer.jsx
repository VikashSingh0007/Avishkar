// import { useState } from "react";
import { useState } from "react";
import "./Dialer.css"; // Import the CSS file for styling
import data1 from "../../../../Data/Event/Culrav/Department";
import Toast from "./toast";
import { useNavigate } from "react-router-dom";

const RotaryDial = ({ setStart, start }) => {
  const [selected, setSelected] = useState(1);
  const [val, setVal] = useState(-1);
  const [showToast, setshowToast] = useState(0);
  const [event, setEvent] = useState("");
  console.log("show", start);

  const navigate = useNavigate();

  const handleButtonClick = (ind, duration) => {
    console.log("fnnvbnbv");
    setSelected(data1[ind]);
    console.log(data1[ind]);
    console.log("xyz", ind, start);
    if (start === 0) {
      setshowToast(1);
      return;
    }
    setVal(ind);

    const out = document.getElementById("dial-outer");
    let d = -(95 + (ind - 2.1) * 20);
    out.style.transform = `translate(-0%, -0%) rotate(${d}deg)`;
    out.style.transitionDuration = `${duration}s`;
    out.style.transitionTimingFunction = "linear";
    setTimeout(() => {
      resetRotation();
    }, duration * 1000);
    setTimeout(() => {
      resetSize(ind, duration);
    }, duration * 3700);
  };
  const resetSize = (ind, duration) => {
    setStart(0);
    setEvent("");
    setTimeout(() => {
      navigate(`culrav-landing/${ind}`);
    }, duration * 2200);
  };
  const resetRotation = () => {
    setVal(-1);
    const out = document.getElementById("dial-outer");
    out.style.transform = "translate(-0%, -0%) rotate(0deg)";
    out.style.transitionDuration = "1.5s";
    out.style.transitionTimingFunction = "linear";
  };
  const handleHover = (ind) => {
    setEvent(data1[ind]);
  };

  const handleMouseLeave = () => {
    setEvent("");
  };
  const data = [
    "Rangmanch",
    "Rangsaazi",
    "Litmuse",
    "Anunaad",
    "Razzmatazz",
    "Darkroom",
    "Spandan",
  ];
  console.log(data1);
  return (
    <div className=" h-full w-[50vw] rounded-full">
      <div>{showToast == 1 && <Toast setshowToast={setshowToast} />}</div>
      <div
        id="dial-outer"
        className="relative flex w-[100%] h-full left-0 top-0 rounded-full bg-black"
      >
        <div>
          {[0, 1, 2, 3, 4, 5, 6].map((index) => (
            // <a href={`culrav-landing/${index}`}>
            <div
              key={`btn${index}`}
              className="btn"
              id={`btn${index}`}
              style={{
                borderColor: index === val ? "red" : "initial",
                backgroundColor:
                  index === val ? "rgb(218, 180, 117)" : "#edd698",
                fontSize: "1.4vw",
                fontFamily: "shiv",
              }}
              onClick={() => handleButtonClick(index, 0.5)}
              onMouseOver={() => handleHover(index)}
              onMouseLeave={() => handleMouseLeave()}
            >
              {7 - index}
            </div>
            // </a>
          ))}
        </div>
      </div>
      <div
        className="relative flex w-[7em] h-[7em] bg-amber-300 border-2 text-black border-amber-200 z-20 left-[2.6em] top-[-9.6em] rounded-[100%] justify-center items-center"
        // style={{ transform: "rotate(-18deg)" }}
      >
        {selected == 1 ? event.title : selected.title}
        {/* {selected.title} */}
      </div>
    </div>
  );
};

export default RotaryDial;
