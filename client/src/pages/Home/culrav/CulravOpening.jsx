import React, { useEffect, useRef } from "react";
import "./CulravOpening.css";
// import computerScreen from "./components/images/computer_screen.jpg";
// import Tv from "./assets/television1.png";
// import video from "../../../assets/culrav.mp4";
import { Link } from "react-router-dom";
// import video from "./../../../../../assets/Final.mp4";
const CulravLanding = () => {
  return (
    <div className="bg-black min-h-screen overflow-hidden containerHomePage">
      <h4 className="text-white text-lg">Culrav</h4>
      <h6 className="text-white">
        Culrav, a 4-day-long annual cultural extravaganza of MNNIT Allahabad, is
        a vibrant celebration of art, music, and creativity. With its diverse
        range of activities, including pronites featuring performances by
        renowned artists or bands, kavsandhya highlighting poetry and
        literature, and appearances by comedians or big figures, Culrav offers
        entertainment and engagement for all attendees.
      </h6>
      <Link to="/culravLanding">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Button
        </button>
      </Link>
    </div>
  );
};

export default CulravLanding;
