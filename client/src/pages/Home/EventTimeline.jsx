import React from "react";
import "./EventTimeLine.css";
const timelineData = [
  {
    text: "Inaugural Ceremony, gnoTalks  ",
    date: "March 16 2024",
    category: {
      tag: "Day1",
      color: "#000",
    },
    link: {
      url: "",
      text: "Get Schedule of Day 1",
    },
  },
  {
    text: "gnoTalks",
    date: "March 17 2024",
    category: {
      tag: "Day2",
      color: "#000",
    },
    link: {
      url: "",
      text: "Get Schedule of Day 2",
    },
  },
  {
    text: "Special Performance",
    date: "March 18 2024",
    category: {
      tag: "Day3",
      color: "#000",
    },
    link: {
      url: "",
      text: "Get Schedule of Day 3",
    },
  },
  {
    text: "KavyasAndhya",
    date: "March 19 2024",
    category: {
      tag: "Day4",
      color: "#000",
    },
    link: {
      url: "",
      text: "Get Schedule of Day 4",
    },
  },
  {
    text: "EDM Night",
    date: "March 20 2024",
    category: {
      tag: "Day5",
      color: "#000",
    },
    link: {
      url: "",
      text: "Get Schedule of Day 5",
    },
  },
  {
    text: "BAnd Performance",
    date: "March 21 2024",
    category: {
      tag: "Day 6",
      color: "#000",
    },
    link: {
      url: "",
      text: "Get Schedule of Day 6",
    },
  },
  {
    text: "Celebrity Night",
    date: "April 22 2024",
    category: {
      tag: "Day7",
      color: "#000",
    },
    link: {
      url: "",
      text: "Get Schedule of Day 7",
    },
  },
];

const TimelineItem = ({ data }) => (
  <div className="timeline-item protest-revolution-regular rumoura-font ">
    <div className="timeline-item-content protest-revolution-regular rumoura-font">
      <span
        className="tag rumoura-font"
        style={{
          background: data.category.color,
          display: "inline-flex",
          flexDirection: "column",
          fontSize: "15px",
        }}
      >
        {data.category.tag.split("").map((char, index) => (
          <span key={index} style={{}}>
            {char}
          </span>
        ))}
      </span>
      <time style={{ color: "black", fontSize: "20px" }}>{data.date}</time>

      <div className=" text-black break-all text-[1em] font-bold rumoura-font">
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
);

const Timeline = () =>
  timelineData.length > 0 && (
    <>
      <h2
        className="text-3xl text-black font-bold mb-4 flex justify-center mt-[10%] rumoura-font"
        style={{
          fontSize: "xx-large",
          fontWeight: "bolder",
          textAlign: "center",
        }}
      >
        Event Timeline
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
