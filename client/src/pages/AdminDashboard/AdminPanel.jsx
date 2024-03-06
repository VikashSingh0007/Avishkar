import { useState, useEffect, useRef } from "react";
import View from "./Profile";
import ViewEvent from "./ViewEvent";
import VerifyPayment from "./VerifyPayment";
import AddDC from "./AddDC";
import Navbar from "../Home/Navbar";

const User = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const [choice, setChoice] = useState("view");
  const [isModalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Function to handle click outside of the sidebar
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // Effect to add event listener when the component mounts
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChoice = (choice) => {
    setChoice(choice);
  };

  const events = Array.from({ length: 67 }, (_, index) => `Event ${index + 1}`);

  // Filter events based on search term
  const filteredEvents = events.filter((event) =>
    event.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="absolute flex flex-col w-full h-full top-0 left-0 p-2"
      style={{
        background:
          "linear-gradient(to bottom, #d95f3b, #f0984a, #fcd6a5, #7aa9a3, #338f9a, #1c4c70)",
      }}
    >
      <div className="lg:h-[15%] h-[10%]  bg-transparent">
        <Navbar />
      </div>
      <div className="lg:h-[85%] h-[90%] flex flex-row">
        <div
          className="w-[20%] h-[90%] bg-orange-400 m-2 relative"
          style={{ borderRadius: "5%" }}
        >
          <div
            className={`flex p-2  items-center mt-5 font-semibold cursor-pointer rounded-md ${
              choice === "view" ? "bg-blue-200" : ""
            }`}
            onClick={() => {
              handleChoice("view");
            }}
          >
            View
          </div>
          <div
            className={`flex p-2  items-center mt-5 font-semibold cursor-pointer rounded-md ${
              choice === "viewEvent" ? "bg-blue-200" : ""
            }`}
            onClick={() => {
              setModalOpen(!isModalOpen);
            }}
          >
            Events
          </div>

          <div
            className={`flex p-2  items-center mt-5 font-semibold cursor-pointer rounded-md ${
              choice === "verifyPayment" ? "bg-blue-200" : ""
            }`}
            onClick={() => {
              handleChoice("verifyPayment");
            }}
          >
            Verify Payment
          </div>
          <div
            className={`flex p-2  items-center mt-5 font-semibold cursor-pointer rounded-md ${
              choice === "addDC" ? "bg-blue-200" : ""
            }`}
            onClick={() => {
              handleChoice("addDC");
            }}
          >
            Department Coordinator
          </div>
        </div>
        <div
          className="w-[80%]  m-2 flex flex-col p-2 bg-orange-400  items-center"
          style={{ borderRadius: "2%" }}
        >
          {choice === "view" && <View />}
          {choice === "viewEvent" && <ViewEvent event={selectedEvent} />}
          {choice === "verifyPayment" && <VerifyPayment />}
          {choice === "addDC" && <AddDC />}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded shadow-lg max-h-80 overflow-y-auto w-96 scrollbar-thin scrollbar-thumb-blue-500 relative">
            <button
              className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded cursor-pointer"
              onClick={closeModal}
            >
              &#x2715;
            </button>
            <h2 className="text-2xl font-bold mb-4">Select Event</h2>

            <input
              type="text"
              placeholder="Search events..."
              className="w-full p-2 mb-4 border rounded focus:outline-none focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div>
              {filteredEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-blue-200 p-3 rounded mb-2 cursor-pointer hover:bg-blue-300"
                  onClick={() => {
                    setSelectedEvent(event);
                    handleChoice("viewEvent");
                    closeModal();
                  }}
                >
                  {event}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
