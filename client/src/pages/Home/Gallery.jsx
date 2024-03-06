// Timeline.js

import React from "react";
import "./Gallery.css"; // Make sure to adjust the path
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
  return (
    <div className="custom-boy-css rootGallary">
      <h2
        className="text-3xl text-black font-bold  flex justify-center mt-[10%] rumoura-font underline"
        style={{
          fontSize: "xx-large",
          fontWeight: "bolder",
          textAlign: "center",
        }}
      >
        Gallery
      </h2>
      <section className="timeline mb-[-10%]">
        {timelineData.map((item, index) => (
          <article key={index}>
            <img
              className="imgGallery "
              src={item.imgSrc}
              alt=""
              style={{ width: "350px", height: "400px", borderRadius: "20px" }}
            />
          </article>
        ))}
      </section>
    </div>
  );
};

export default Timeline;
