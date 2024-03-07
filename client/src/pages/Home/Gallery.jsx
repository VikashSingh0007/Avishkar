import React, { useRef, useEffect, useState } from "react";
import "./Gallery.css"; // Make sure to adjust the path
import { motion } from "framer-motion"; // Importing motion from framer-motion
import MameKhan from "../Home/assets/MameKhan.jpeg";
import Spandan from "../Home/assets/Spandan.png";
import Song from "../Home/assets/Song.png";
import Performance1 from "../Home/assets/performance.png";
import Performance2 from "../Home/assets/Performance2.png";
import Performance3 from "../Home/assets/Performance3.png";
import Performance4 from "../Home/assets/Performance4.png";

const timelineData = [
  {
    imgSrc: MameKhan,
    title: "The legend of Zelda",
    year: "1986",
    platform: "NES",
  },
  {
    imgSrc: Performance1,
    title: "The Adventure of Link",
    year: "1987",
    platform: "NES",
  },
  {
    imgSrc: Song,
    title: "A Link to the Past",
    year: "1991",
    platform: "SNES",
  },
  {
    imgSrc: Performance2,
    title: "Link's Awakening",
    year: "1993",
    platform: "Game Boy",
  },
  {
    imgSrc: Performance3,
    title: "Ocarina of Time",
    year: "1998",
    platform: "Nintendo 64",
  },
  {
    imgSrc: Performance4,
    title: "Majora's Mask",
    year: "2000",
    platform: "Nintendo 64",
  },
  {
    imgSrc: Spandan,
    title: "Oracle of Seasons",
    year: "2001",
    platform: "Game Boy Color",
  },
];

const Timeline = () => {
  const timelineRef = useRef(null);
  const [data, setData] = useState(timelineData);

  useEffect(() => {
    const handleAutoSwipe = () => {
      if (window.innerWidth <= 800 && timelineRef.current) {
        // Move to the first item when reaching the end
        // console.log(timelineRef.current);
        // console.log(timelineRef.current.scrollLeft);
        // console.log(
        //   timelineRef.current.scrollWidth - timelineRef.current.offsetWidth
        // );

        if (
          timelineRef.current.scrollLeft >=
          timelineRef.current.scrollWidth -
            timelineRef.current.offsetWidth -
            200
        ) {
          timelineRef.current.scrollLeft = 0;
          // Reload the data after reaching the end
          setData(timelineData);
          // console.log("Data reloaded");
        } else {
          timelineRef.current.scrollLeft += timelineRef.current.offsetWidth;
        }
      }
    };

    const intervalId = setInterval(handleAutoSwipe, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="custom-boy-css rootGallary  flex justify-center">
      <h2
        className="text-[4rem] text-white font-bold flex justify-center mt-[10%] rumoura-font"
        style={{
          fontWeight: "bolder",
          textAlign: "center",
          textShadow: "0 0 10px white", // Add white shadow with 10px blur
        }}
      >
        Gallery
      </h2>
      <motion.section // Wrap section with motion component
        ref={timelineRef}
        className="timeline mb-[-10%] overflow-x-hidden sm:overflow-x-scroll"
      >
        {data.map((item, index) => (
          <motion.article // Wrap article with motion component
            key={index}
            animate={{ opacity: 1 }} // Animation to fade in
            initial={{ opacity: 0 }} // Initial opacity
            transition={{ duration: 1 }} // Duration of animation
            className="transition-opacity ease-in-out duration-1000" // Tailwind CSS classes for smooth transition
          >
            <img
              className="imgGallery"
              src={item.imgSrc}
              alt=""
              style={{
                width: "350px",
                height: "400px",
                borderRadius: "20px",
              }}
            />
          </motion.article>
        ))}
      </motion.section>
    </div>
  );
};

export default Timeline;
