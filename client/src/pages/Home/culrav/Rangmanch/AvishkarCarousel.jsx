import React, { useState } from "react";
import "./rangmanchCarousel.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const Carousel = ({}) => {
  const { data } = useParams();
  const decodedData = JSON.parse(decodeURIComponent(data));
  console.log(decodedData.info[0]);

  const [numberOfImages, setNum] = useState(10);
  const [selected, setSelected] = useState(0); // Initial index of the selected image

  const moveToSelected = (element) => {
    let newSelected;

    if (element === "next") {
      newSelected = selected < numberOfImages - 1 ? selected + 1 : 0;
    } else if (element === "prev") {
      newSelected = selected > 0 ? selected - 1 : numberOfImages - 1;
    } else {
      newSelected = element;
    }

    setSelected(newSelected);
  };

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "ArrowLeft":
        moveToSelected("prev");
        break;

      case "ArrowRight":
        moveToSelected("next");
        break;

      default:
        return;
    }
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(to bottom, #d95f3b, #f0984a, #fcd6a5, #7aa9a3, #338f9a, #1c4c70)",
        width: "100%",
        height: "100vh",
      }}
      // style={{
      //   backgroundImage:
      //     "url('https://cdn.pixabay.com/photo/2016/10/11/21/43/geometric-1732847_1280.jpg')",
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   width: "100%",
      //   height: "100vh",
      // }}
    >
      <div
        className="flex justify-center pt-4 text-[] text-white"
        style={{ fontFamily: "ram" }}
      >
        {decodedData.event}
      </div>
      <main>
        <div id="carousel">
          {decodedData.info[0].events.map((event, index) => (
            <div
              key={index}
              onClick={() => moveToSelected("next")}
              className={
                index === selected
                  ? "selected  overflow-hidden"
                  : index === selected - 1 ||
                    (index === 0 && selected === numberOfImages - 1)
                  ? "prev"
                  : index === selected + 1 ||
                    (index === numberOfImages - 1 && selected === 0)
                  ? "next"
                  : index === selected - 2 ||
                    (index === 1 && selected === numberOfImages - 1)
                  ? "prevLeftSecond"
                  : index === selected + 2 ||
                    (index === numberOfImages - 2 && selected === 0)
                  ? "nextRightSecond"
                  : index < selected
                  ? "hideLeft"
                  : "hideRight"
              }
            >
              <img
                className="w-full"
                src={decodedData.info[0].BgImageLink} // replace with dynamic image source
                alt={`Image ${index + 1}`}
              />
              <div className="absolute bottom-20 left-0 w-full text-center text-white bg-black bg-opacity-50 p-2 font-bold font-sans">
                {event.name}
              </div>
              <Link
                to={`/page/${encodeURIComponent(JSON.stringify(event))}`}
                className="absolute hover:bg-[#93b5c6] bottom-0 left-0 w-full text-center bg-opacity-25 bg-white backdrop-blur-md p-6  shadow-md"
              >
                <p className="text-3xl w-full mt-2">Explore!</p>
              </Link>
              {/* <div
                style={{ fontFamily: "ram" }}
                className="absolute hover:bg-[#93b5c6] bottom-0 left-0 w-full text-center bg-opacity-25 bg-white backdrop-blur-md p-6  shadow-md"
              >
                Explore
              </div> */}
            </div>
          ))}
        </div>

        <div className="buttons flex justify-end">
          <button onClick={() => moveToSelected("prev")}>
            <div>
              <svg
                style={{ width: "48px", height: "48px" }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
          </button>
          <button onClick={() => moveToSelected("next")}>
            <svg
              style={{ width: "48px", height: "48px" }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Carousel;
