import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./Event.css";
import { useParams } from "react-router-dom";
import page from "../Event/Page";
import General from "../../assets/general.png";

const EventCard = ({ data }) => {
  // console.log(data);

  return (
    <div className="EventCard">
      {" "}
      {/* Wrap the card with Link */}
      <div
        className="card1 p-3 bg-[#63462D]"
        style={{ boxShadow: "0px 10px 10px black" }}
      >
        <Link
          to={`/avishkarpage/${encodeURIComponent(JSON.stringify(data))}`}
          className="flex items-center justify-center cursor-pointer "
        >
          <div className="wrapper-card ">
            {/* <h1 className="w-full flex justify-center border-2  border-black  sm:text-2xl xl:text-3xl font-custom ">
              {data.event}
            </h1> */}
            <div className="flex justify-center items-center h-full">
              <div className="flex flex-col items-center">
                <img
                  className="cover-image"
                  src={data.BGImageLink || General}
                  alt="General image"
                />
                {data.BGImageLink === "" && (
                  <h1
                    // className="flex flex-col"
                    style={{
                      textAlign: "center",
                      position: "absolute",
                      marginTop: "90px",
                      justifyContent: "block",
                      color: "#004c00",
                      fontWeight: "bold",
                      fontSize: "2rem",
                      fontFamily: "serif",
                    }}
                  >
                    {data.name}
                  </h1>
                )}
                <span className="flex text-center mx-auto text-3xl text-amber-100 font-custom hover:opacity-70 transition-opacity duration-300 ">
                  <div className="flex-col">
                    <h4 className="text-3xl text-white w-full mt-2 rumoura-font">
                      Explore !
                    </h4>
                  </div>
                </span>
              </div>
            </div>
          </div>{" "}
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
