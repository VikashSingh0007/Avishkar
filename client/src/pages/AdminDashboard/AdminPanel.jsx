import { useState, useEffect, useRef } from "react";
import View from "./Profile";
import ViewEvent from "./ViewEvent";
import VerifyPayment from "./VerifyPayment";
import AddDC from "./AddDC";
import Navbar from "../Home/Navbar";
import { getAllEvents } from "../../services/adminService";
import ViewDC from "./viewDC"

const User = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const [choice, setChoice] = useState("view");
  const [isModalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    //Get All events
    const fetchEvents = async () => {
      try {
        const d = await getAllEvents();
        console.log(d.success);
        if (d.success) {
          setEvents(d.events.data);
        }
      } catch (error) {
        history("/login");
        console.error("Error fetching data:", error);
      }
    };
    fetchEvents();
  }, []);

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
    console.log("Choice", choice);
    setChoice(choice);
  };

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
      <div className="lg:h-[85%] h-[90%] flex flex-col md:flex-row ">
        <div
          className="md:w-[20%] items-center  flex md:h-[90%] justify-evenly md:justify-start flex-wrap sm:flex-row md:flex-col m-2  bg-gray-200 bg-opacity-20 rounded shadow-lg backdrop-filter backdrop-blur-md"
          style={{ borderRadius: "2%" }}
        >
          <div
            className={`flex text-center p-2 text-xl items-center  font-semibold cursor-pointer rounded-md hover:bg-orange-300 ${
              choice === "view" ? "bg-orange-400" : ""
            }`}
            onClick={() => {
              handleChoice("view");
            }}
          >
            View
          </div>
          <div
            className={`flex text-center p-2 text-xl  items-center font-semibold cursor-pointer hover:bg-orange-300 rounded-md ${
              choice === "viewEvent" ? "bg-orange-400" : ""
            }`}
            onClick={() => {
              setModalOpen(!isModalOpen);
            }}
          >
            Events
          </div>

          <div
            className={`flex text-center p-2 text-xl  items-center  font-semibold hover:bg-orange-300 cursor-pointer rounded-md ${
              choice === "verifyPayment" ? "bg-orange-400" : ""
            }`}
            onClick={() => {
              handleChoice("verifyPayment");
            }}
          >
            Verify Payment
          </div>
          <div
            className={`flex text-center p-2 text-xl  items-center font-semibold hover:bg-orange-300 cursor-pointer rounded-md ${
              choice === "addDC" ? "bg-orange-400" : ""
            }`}
            onClick={() => {
              handleChoice("addDC");
            }}
          >
            Department Coordinator
          </div>
          <div
            className={`flex text-center p-2 text-xl  items-center font-semibold hover:bg-orange-300 cursor-pointer rounded-md ${
              choice === "viewDC" ? "bg-orange-400" : ""
            }`}
            onClick={() => {
              handleChoice("viewDC");
            }}
          >
            View Departmental. Coordinators
          </div>
        </div>
        <div
          className="md:w-[80%] md:h-auto h-[100%]  m-2 flex flex-col p-2  items-center bg-gray-200 bg-opacity-20 rounded shadow-lg backdrop-filter backdrop-blur-md"
          style={{ borderRadius: "2%" }}
        >
          {choice === "view" && <View />}
          {choice === "viewEvent" && <ViewEvent event={selectedEvent} />}
          {choice === "verifyPayment" && <VerifyPayment />}
          {choice === "addDC" && <AddDC />}
          {choice === "viewDC" && <ViewDC />}

        </div>
      </div>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center ">
          <div className="bg-white m-2 p-4 rounded shadow-lg max-h-80 overflow-y-auto w-96 scrollbar-thin scrollbar-thumb-blue-500 relative">
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
              className="w-full p-2 mb-4 border rounded focus:outline-none focus:border-orange-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div>
              {filteredEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-orange-200 p-3 rounded mb-2 cursor-pointer hover:bg-orange-300"
                  onClick={() => {
                    closeModal();
                    setSelectedEvent(event);
                    handleChoice("viewEvent");
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
