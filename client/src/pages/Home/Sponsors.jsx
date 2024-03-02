import React, { useState, useEffect } from "react";
import "./Sponsors.css";

import Dristi from "./culrav/assets/dristi.png";
import SBI from "./culrav/assets/SBi.png";
import icici from "./culrav/assets/icici.png";
import bbq from "./culrav/assets/BBQ.png";
import redBull from "./culrav/assets/redBull.png";
import beardo from "./culrav/assets/beardo.png";
import varun from "./culrav/assets/varun.png";
const Carousel = () => {
  const Data = [
    {
      name: "Dristi",
      img: Dristi,
    },
    {
      name: "SBI",
      img: SBI,
    },
    {
      name: "ICICI",
      img: icici,
    },
    {
      name: "BBQ",
      img: bbq,
    },
    {
      name: "redBull",
      img: redBull,
    },
    {
      name: "Beardo",
      img: beardo,
    },
    {
      name: "varun",
      img: varun,
    },
  ];
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every .scroller on the page
        scroller.setAttribute("data-animated", true);

        // Make an array from the elements within .scroller-inner
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the .scroller-inner
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);
  return (
    <div>
      <h2
        className="text-3xl text-black font-bold mb-4 flex justify-center mt-[10%]"
        style={{
          fontSize: "xx-large",
          fontWeight: "bolder",
          textAlign: "center",
          fontFamily: "Libre Bodoni, serif",
        }}
      >
        Our Past Sponsor
      </h2>
      <div
        className="scroller mt-[10%] "
        data-direction="left"
        data-speed="slow"
      >
        <div className="scroller__inner">
          {Data.map((item, index) => (
            <div key={index} className="photo-container">
              <img
                src={item.img}
                height="50"
                width="50"
                className="rounded-full lg:h-300 lg:w-300"
                alt={item.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
