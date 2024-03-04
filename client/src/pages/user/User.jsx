import React, { useState, useEffect, useRef } from "react";
import View from "./View";
import Team from "./Team";
import Invitations from "./Invitations";
import Create from "./Create";
import Resume from "./Resume";

const User = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Function to handle click outside of the sidebar
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  };

  // Effect to add event listener when the component mounts
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      // className="bg-gray-900"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #d95f3b, #f0984a, #fcd6a5, #7aa9a3, #338f9a, #1c4c70)",
        backgroundAttachment: "fixed",
      }}
    >
      {" "}
      <button className="p-4" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <svg viewBox="0 0 100 80" width="40" height="40" fill="#000000">
          <rect width="100" height="15"></rect>
          <rect y="30" width="100" height="15"></rect>
          <rect y="60" width="100" height="15"></rect>
        </svg>
      </button>
      <div className="flex ">
        {isSidebarOpen && (
          <aside
            ref={sidebarRef}
            className="flex z-1 absolute flex-col w-64 h-screen px-4 py-8 overflow-y-auto  "
            style={{
              backgroundImage:
                "linear-gradient(to bottom, #d95f3b, #f0984a, #fcd6a5, #7aa9a3, #338f9a, #1c4c70)",
              backgroundAttachment: "fixed",
            }}
          >
            <div className="flex flex-col justify-between flex-1 mt-6">
              <nav>
                <a
                  className="flex items-center px-4 py-2 my-8 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200"
                  href=""
                >
                  <span className="mx-4 font-medium">View Profile</span>
                </a>
                <a
                  className="flex items-center px-4 py-2 my-8 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200"
                  href="#"
                >
                  <span className="mx-4 font-medium">Upload Resume</span>
                </a>{" "}
                <a
                  className="flex items-center px-4 py-2 my-8 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200"
                  href="#"
                >
                  <span className="mx-4 font-medium">My Teams</span>
                </a>{" "}
                <a
                  className="flex items-center px-4 py-2 my-8 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200"
                  href="#"
                >
                  <span className="mx-4 font-medium">Create Team</span>
                </a>{" "}
                <a
                  className="flex items-center px-4 py-2 my-8 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200"
                  href="#"
                >
                  <span className="mx-4 font-medium">View Invitation</span>
                </a>
              </nav>
            </div>
          </aside>
        )}
      </div>
      <View />
    </div>
  );
};

export default User;
