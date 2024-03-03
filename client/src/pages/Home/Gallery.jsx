import React from "react";
import "./Gallery.css"; // Import CSS file for styling
import { Link } from "react-router-dom";
import mohit from "./assets/mohit.jpeg";
const ParallaxGallery = () => {
  return (
    <div className="external1 mt-0 mb-[0%]">
      <h2
        className="text-3xl text-black font-bold mb-4 flex justify-center mt-[10%]"
        style={{
          fontSize: "xx-large",
          fontWeight: "bolder",
          textAlign: "center",
          fontFamily: "Libre Bodoni, serif",
        }}
      >
        Gallery
      </h2>
      <div className="horizontal-scroll-wrapper1 sm:mt-[-30%] md:mt-[-20%] lg:mt-[-10%]">
        {/* Image wrappers */}
        <div className="img-wrapper1 slower">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/paris-cafe-terrace.jpg"
            alt=""
            className="alpha"
          />
        </div>
        <div className="img-wrapper1 slower2">
          <img src={mohit} alt="" className="alpha" />
        </div>
        <div className="img-wrapper1 slower1">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/paris-cafe-terrace.jpg"
            alt=""
            className="alpha"
          />
        </div>
        <div className="img-wrapper1 slower">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/paris-cafe-terrace.jpg"
            alt=""
            className="alpha"
          />
        </div>
        <div className="img-wrapper1 slower1">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/paris-cafe-terrace.jpg"
            alt=""
            className="alpha"
          />
        </div>
        <div className="img-wrapper1 slower2">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/paris-cafe-terrace.jpg"
            alt=""
            className="alpha"
          />
        </div>
        <div className="img-wrapper1 slower">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/paris-cafe-terrace.jpg"
            alt=""
            className="alpha"
          />
        </div>
        <div className="img-wrapper1 slower1">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/paris-cafe-terrace.jpg"
            alt=""
            className="alpha"
          />
        </div>
        {/* Add more image wrappers as needed */}
      </div>
    </div>
  );
};

export default ParallaxGallery;
