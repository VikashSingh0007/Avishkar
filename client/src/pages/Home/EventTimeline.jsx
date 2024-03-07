import React from "react";
import "./EventTimeLine.css";
import { BiSolidCalendar } from "react-icons/bi";
const timelineData = [
  {
    text: "Inaugural Ceremony, gnoTalks  ",
    date: "March 16 2024",
    category: {
      tag: "Day-1",
      color: "#000",
    },
    link: {
      url: "",
      text: "Get Schedule of Day1",
    },
  },
  {
    text: "gnoTalks",
    date: "March 17 2024",
    category: {
      tag: "Day-2",
      color: "#000",
    },
    link: {
      url: "",
      text: "Get Schedule of Day2",
    },
  },
  {
    text: "Special Performance",
    date: "March 18 2024",
    category: {
      tag: "Day-3",
      color: "#000",
    },
    link: {
      url: "",
      text: "Get Schedule of Day3",
    },
  },
  {
    text: "KavyasAndhya",
    date: "March 19 2024",
    category: {
      tag: "Day-4",
      color: "#000",
    },
    link: {
      url: "",
      text: "Get Schedule of Day4",
    },
  },
  {
    text: "EDM Night",
    date: "March 20 2024",
    category: {
      tag: "Day-5",
      color: "#000",
    },
    link: {
      url: "",
      text: "Get Schedule of Day5",
    },
  },
  {
    text: "BAnd Performance",
    date: "March 21 2024",
    category: {
      tag: "Day-6",
      color: "#000",
    },
    link: {
      url: "",
      text: "Get Schedule of Day6",
    },
  },
  {
    text: "Celebrity Night",
    date: "April 22 2024",
    category: {
      tag: "Day-7",
      color: "#000",
    },
    link: {
      url: "",
      text: "Get Schedule of Day7",
    },
  },
];

const TimelineItem = ({ data }) => (
  <div className="timeline-item protest-revolution-regular rumoura-font   ">
    <div className="timeline-item-content protest-revolution-regular items-start rumoura-font bg-[#F3B95F] flex flex-col md:flex-row-reverse justify-around">
      <div
        className="tag protest-revolution-regular rumoura-font"
        style={{ background: data.category.color, whiteSpace: "pre-line" }}
      >
        <div className="md:block hidden">
          {data.category.tag.split("").map(
            (char, index) =>
              char !== "-" && (
                <div
                  key={index}
                  className="text-white text-xl text-center md:pl-1 md:pr-1"
                >
                  {char}
                </div>
              )
          )}
        </div>
        <div className="text-white text-xl text-center md:hidden">
          {data.category.tag}
        </div>
      </div>
      <div className=" w-full text-left">
        <time style={{ color: "black", fontSize: "1.5em" }}>{data.date}</time>

        <div className=" text-black break-all text-[1.3em] font-bold rumoura-font">
          {data.text}
        </div>
        {data.link && (
          <a
            href={data.link.url}
            target="_blank"
            style={{ color: "black", fontSize: "16px" }}
            rel="noopener noreferrer"
          >
            {data.link.text}
          </a>
        )}
        {/* <span className="circle mt-[25%] mr-auto" /> */}
      </div>
    </div>
  </div>
);

const Timeline = () =>
  timelineData.length > 0 && (
    <>
      <h2
        className="md:text-[4rem] tracking-widest font-Robo text-[2.5rem] text-white font-bold mb-4 flex justify-center mt-[10%] rumoura-font"
        style={{
          fontWeight: "bolder",
          textAlign: "center",
          textShadow: "0 0 10px black", // Add white shadow with 10px blur
        }}
      >
       <BiSolidCalendar  className="mt-[22px] hidden lg:inline  md:w-12 md:h-12  mr-2 hover:rotate-90 transition-all duration-300  "/>  Event Timeline 
      </h2>
     
      <div
        className="timeline-container "
        id="timelineContainer"
        style={{ overflowY: "auto", maxHeight: "400px" }}
      >
        <div
          className="timeline-container bungee-shade-regular rumoura-font"
          style={{ overflowY: "auto", maxHeight: "400px" }}
        >
          {timelineData.map((data, idx) => (
            <TimelineItem data={data} key={idx} />
          ))}
        </div>
      </div>
    </>
  );

export default Timeline;
