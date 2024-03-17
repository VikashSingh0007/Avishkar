import React from "react";
import "./EventTimeLine.css";
import { BiSolidCalendar } from "react-icons/bi";
const timelineData = [
  {
    text: "Inauguration, Juhi Babbar Performance",
    date: "March 15 2024",
    category: {
      tag: "Day-1",
      color: "#000",
    },
    link: {
      url: "",
      text: "Get Schedule of Day 1",
    },
  },
  {
    text: "gnoTalks  ",
    date: "March 16 2024",
    category: {
      tag: "Day-2",
      color: "#000",
    },
    link: {
      url: "",
      text: "Get Schedule of Day 2",
    },
  },
  {
    text: "gnoTalks",
    date: "March 17 2024",
    category: {
      tag: "Day-3",
      color: "#000",
    },
    link: {
      url: "",
      text: "Get Schedule of Day 3",
    },
  },
  {
    text: "Special Performance",
    date: "March 18 2024",
    category: {
      tag: "Day-4",
      color: "#000",
    },
    link: {
      url: "",
      text: "Get Schedule of Day 4",
    },
  },
  {
    text: "Kavyasandhya",
    date: "March 19 2024",
    category: {
      tag: "Day-5",
      color: "#000",
    },
    link: {
      url: "",
      text: "Get Schedule of Day 5",
    },
  },
  {
    text: "Celebrity Night - Mohit Chauhan",
    date: "March 20 2024",
    category: {
      tag: "Day-6",
      color: "#000",
    },
    link: {
      url: "",
      text: "Get Schedule of Day 6",
    },
  },
  {
    text: "Band Performance",
    date: "March 21 2024",
    category: {
      tag: "Day-7",
      color: "#000",
    },
    link: {
      url: "",
      text: "Get Schedule of Day 7",
    },
  },
  {
    text: "Special Performance",
    date: "March 22 2024",
    category: {
      tag: "Day-8",
      color: "#000",
    },
    link: {
      url: "",
      text: "Get Schedule of Day 8",
    },
  },
];

const TimelineItem = ({ data }) => (
  <div className="timeline-item protest-revolution-regular rumoura-font   ">
    <div className="timeline-item-content protest-revolution-regular items-start rumoura-font bg-[#3A3416CC] flex flex-col md:flex-row-reverse justify-around">
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
      <div className=" w-full text-white text-left">
        <time
          style={{
            color: "white",
            fontSize: "1.5em",
            textShadow: "0px 0px 10px black",
          }}
        >
          {data.date}
        </time>

        <div
          className=" break-all text-white text-[.9em] sm:text-[1.3em] font-bold kelly-slab-regular"
          style={{ textShadow: "0px 0px 10px black" }}
        >
          {data.text}
        </div>

        {data.link && (
          <a
            href={data.link.url}
            target="_blank"
            style={{
              fontSize: "16px",
              color: "white",
              textShadow: "0px 0px 10px black",
            }}
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
        className="text-[2rem] sm:text-[3rem] tracking-wider text-white font-bold flex justify-center mt-[10%] rumoura-font"
        style={{
          fontWeight: "bolder",
          textAlign: "center",
          textShadow: "0 0 10px black", // Add white shadow with 10px blur
        }}
      >
        {/* <BiSolidCalendar className="mt-[22px] hidden lg:inline  md:w-12 md:h-12  mr-2 hover:rotate-90 transition-all duration-300  " />{" "} */}
        Event Timeline
      </h2>
      <h2
        className="text-[1rem] sm:text-[2rem] tracking-wider text-white font-medium flex justify-center  rumoura-font"
        style={{
          fontWeight: "bolder",
          textAlign: "center",
          textShadow: "0 0 10px black", // Add white shadow with 10px blur
        }}
      >
        {/* <BiSolidCalendar className="mt-[22px] hidden lg:inline  md:w-12 md:h-12  mr-2 hover:rotate-90 transition-all duration-300  " />{" "} */}
        (March 15 - March 22)
      </h2>
      <div
        className="timeline-container "
        id="timelineContainer"
        style={{ overflowY: "auto", maxHeight: "400px" }}
      >
        <div
          className="timeline-container  rumoura-font"
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
