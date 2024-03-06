import React from "react";
import "./EventTimeLine.css";
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
    text: "Kavyasandhya",
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
    text: "Band Performance",
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
  <div className="timeline-item protest-revolution-regular rumoura-font ">
    <div className="timeline-item-content protest-revolution-regular rumoura-font">
      <span
        className="tag protest-revolution-regular rumoura-font"
        style={{ background: data.category.color }}
      >
        {data.category.tag}
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
