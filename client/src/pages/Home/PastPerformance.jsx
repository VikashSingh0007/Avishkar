import React, { useState, useEffect } from "react";
import "./PastPerformance.css";
import MameKhan from "./culrav/assets/MameKhan.jpeg";
import jessica from "./culrav/assets/jessica.png";
import halder from "./culrav/assets/halder.png";
import fahran from "./culrav/assets/fahran1.png";
import Kumar from "./culrav/assets/KumarViswas.png";
import Rahat from "./culrav/assets/RahatIndori.png";
import sherley from "./culrav/assets/shirley.png";
import Biswa from "./culrav/assets/biswa.jpg";
import Pm from "./culrav/assets/PiyushMishra2022.jpg";
import YD from "./culrav/assets/YellowDiary.jpeg";
import Pame from "./culrav/assets/armstrong-pame-ias-upsc-rank.jpeg";
import RK from "./culrav/assets/rajat-kapoor-3.jpeg";
import Chetan from "./culrav/assets/chetanbhagat.jpg";
import SA from "./culrav/assets/sameer-anjaan.jpg";
import Amish from "./culrav/assets/amish.jpg";
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
      name: "Farhan Akhtar",
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
      name: "Shirley Setia",
      img: sherley,
    },
    {
      name: "Amish Tripathi",
      img: Amish,
    },
    {
      name: "Sameer Anjan",
      img: SA,
    },
    {
      name: "Chetan Bhagat",
      img: Chetan,
    },
    {
      name: "Rajat Kapoor",
      img: RK,
    },
    {
      name: "Armstrong Pame",
      img: Pame,
    },
    {
      name: "Bishwa Kalyan",
      img: Biswa,
    },
    {
      name: "Yellow Diary",
      img: YD,
    },
    {
      name: "Piyush Mishra",
      img: Pm,
    },
  ];
  return (
    <div>
      <h2
        className="text-[2rem] sm:text-[3rem] tracking-wider text-white font-bold flex justify-center mt-[10%] rumoura-font"
        style={{
          fontWeight: "bolder",
          textAlign: "center",
          textShadow: "0 0 10px black", // Add white shadow with 10px blur
        }}
      >
        Celebrity Profile
      </h2>
      <div
        className="scrollerPastPerformance mt-[10%]"
        data-direction="right"
        data-speed="slow"
      >
        <div className="scroller__innerPastPerformance">
          {Data.map((item, index) => (
            <div key={index} className="photo-container">
              <img
                src={item.img}
                alt={item.name}
                style={{ borderRadius: "20px" }}
              />

              <h6
                className="mr-[30%] sm:mr-[0%]"
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#fff",
                }}
              >
                {item.name}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
