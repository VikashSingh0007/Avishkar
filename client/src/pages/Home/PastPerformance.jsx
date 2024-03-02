import React, { useState, useEffect } from "react";
import "./PastPerformance.css";
import MameKhan from "./culrav/assets/MameKhan.jpeg";
import jessica from "./culrav/assets/jessica.png";
import halder from "./culrav/assets/halder.png";
import fahran from "./culrav/assets/fahran1.png";
import Kumar from "./culrav/assets/KumarViswas.png";
import Rahat from "./culrav/assets/RahatIndori.png";
import sherley from "./culrav/assets/shirley.png";
const Carousel = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scrollerPastPerformance");

    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every .scroller on the page
        scroller.setAttribute("data-animated", true);

        // Make an array from the elements within .scroller-inner
        const scrollerInner = scroller.querySelector(
          ".scroller__innerPastPerformance"
        );
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

  const Data = [
    {
      name: "Mame Khan",
      img: MameKhan,
    },
    {
      name: "DJ Jessica",
      img: jessica,
    },
    {
      name: "Anurag Halder",
      img: halder,
    },
    {
      name: "Fahran Akhtar",
      img: fahran,
    },
    {
      name: "Kumar Viswas",
      img: Kumar,
    },
    {
      name: "Rahat Indori",
      img: Rahat,
    },
    {
      name: "Shreley Setia",
      img: sherley,
    },
  ];
  return (
    <div>
      <h2
        className="text-3xl text-black font-bold mb-4 flex justify-center mt-[0%]"
        style={{
          fontSize: "xx-large",
          fontWeight: "bolder",
          textAlign: "center",
          fontFamily: "Libre Bodoni, serif",
        }}
      >
        Our Past Performers
      </h2>
      <div
        className="scrollerPastPerformance mt-[10%]"
        data-direction="right"
        data-speed="slow"
      >
        <div className="scroller__innerPastPerformance">
          {Data.map((item, index) => (
            <div key={index} className="photo-container">
              <img src={item.img} alt={item.name} />
              <h6>{item.name}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
