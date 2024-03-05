import React, { useState, useEffect } from "react";
import "./Sponsors.css";

import Dristi from "./culrav/assets/dristi.png";
import SBI from "./culrav/assets/SBi.png";
import icici from "./culrav/assets/icici.png";
import bbq from "./culrav/assets/BBQ.png";
import beardo from "./culrav/assets/beardo.png";
import varun from "./culrav/assets/V3.jpg";
import dhyeya from "./culrav/assets/dhyeya.jpg";
import RedBull from "./culrav/assets/Red Bull.jpeg";
import Pizzahut from "./culrav/assets/Pizzahut.png";
import Pepsi from "./culrav/assets/Pepsi.png";
import Ola from "./culrav/assets/Ola.jpg";
import Bob from "./culrav/assets/Bob.jpg";
import Dell from "./culrav/assets/Dell.png";
import Godrej from "./culrav/assets/Godrej.png";
import Codechef from "./culrav/assets/Codechef.png";
import Gfg from "./culrav/assets/Gfg.png";
import Github from "./culrav/assets/Github.jpg";
import Groww from "./culrav/assets/Groww.png";
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
      name: "BBQ",
      img: bbq,
    },
    {
      name: "redBull",
      img: RedBull,
    },
    {
      name: "Beardo",
      img: beardo,
    },
    {
      name: "varun",
      img: varun,
    },
    {
      name: "dhyeya",
      img: dhyeya,
    },
    {
      name: "Pizzahut",
      img: Pizzahut,
    },
    {
      name: "Pepsi",
      img: Pepsi,
    },
    {
      name: "Ola",
      img: Ola,
    },
    {
      name: "Bob",
      img: Bob,
    },
    {
      name: "Dell",
      img: Dell,
    },
    {
      name: "Godrej",
      img: Godrej,
    },
    {
      name: "Codechef",
      img: Codechef,
    },
    {
      name: "Gfg",
      img: Gfg,
    },
    {
      name: "Github",
      img: Github,
    },
    {
      name: "Groww",
      img: Groww,
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
        className="text-3xl text-black font-bold mb-2 flex justify-center mt-[10%] rumoura-font"
        style={{
          fontSize: "xx-large",
          fontWeight: "bolder",
          textAlign: "center",
          // fontFamily: "Libre Bodoni, serif",
        }}
      >
        Our Past Sponsors
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
                height="20"
                width="20"
                className="rounded-full lg:h-300 lg:w-300 sm:h-50 sm:w-50"
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
