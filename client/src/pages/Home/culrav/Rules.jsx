import React from "react";
import Img from "./ban.jpeg";
import "./Rules.css";

const Rules = () => {
  const data = {
    name: "Cultural",
    date: "2024-08-20",

    description:
      "Immerse yourself in the rich tapestry of cultures at our annual Cultural Festival. Celebrate diversity through music, dance, art, and cuisine from around the world.",
    rules: [
      {
        title: "Attire",
        description:
          "Attendees are encouraged to wear attire that represents their cultural heritage or expresses their appreciation for cultural diversity.",
      },
      {
        title: "Performance Guidelines",
        description:
          "Groups and individuals interested in performing cultural acts (music, dance, etc.) should register by July 15, 2024. Acts should be respectful and inclusive.",
      },
      {
        title: "Food Stalls",
        description:
          "Vendors offering diverse cuisines are welcome. All food stalls must adhere to health and safety regulations.",
      },
    ],
    contacts: [
      {
        name: "Maria Rodriguez",
        role: "Event Organizer",
        email: "maria.rodriguez@example.com",
        phone: "+1 (555) 234-5678",
      },
      {
        name: "Carlos Gomez",
        role: "Performances Coordinator",
        email: "carlos.gomez@example.com",
        phone: "+1 (555) 876-5432",
      },
      {
        name: "Cultural Festival Info",
        role: "General Inquiries",
        email: "info@culturalfestival.com",
        phone: "+1 (555) 345-6789",
      },
    ],
  };

  const scrollbarStyles = {
    overflowY: "scroll",

    scrollbarWidth: "thin",
    scrollbarColor: "#edd2b1 #eabc78", // thumb color track color
  };
  return (
    <div className="relative flex items-center justify-center ">
      <img src={Img} className="w-full h-[100vh]" alt="Your Image" />

      <div
        style={{ fontFamily: "ram1" }}
        className="absolute w-full h-[100vh]  flex flex-col  text-gray-900 text-2xl font-ram1  rounded-lg shadow-lg"
      >
        <div className="flex text-3xl p-7 justify-center font-bold ">
          {" "}
          {data.name}
        </div>
        <div
          className="text-lg ml-[12vw] mt-[20vh] rounded-xl w-[78vw] h-[35vh] overflow-y-auto "
          style={scrollbarStyles}
        >
          <div className="flex justify-center font-semibold text-3xl">
            Description
          </div>
          {data.description}
          <div className="flex justify-center font-semibold text-3xl">
            Rules
          </div>
          {data.rules.map((rule) => {
            return (
              <>
                <div className="flex justify-center font-bold text-2xl">
                  {rule.title}
                </div>
                {rule.description}
              </>
            );
          })}
          <div className="flex justify-center font-semibold text-3xl">
            Contacts
          </div>
          {data.contacts.map((contact) => {
            return (
              <>
                <div className="flex justify-center font-semibold text-xl">
                  {contact.name}
                </div>
                <div className="flex justify-center  text-lg">
                  {contact.role}
                </div>
                <div className="flex justify-center font-semibold text-xl">
                  {contact.email}
                </div>
                <div className="flex justify-center font-semibold text-xl">
                  {contact.phone}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Rules;
