import React, { useState, useEffect, useRef } from "react";
import View from "./View";
import Team from "./Team";
import Invitations from "./Invitations";
import Create from "./Create";
import Resume from "./Resume";

const User = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const [choice, setChoice] = useState("view");

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
    <div className="bg-gray-900">
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
            className="flex z-1 absolute flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700"
          >
            <div className="relative mt-6">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="w-5 h-5 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <input
                type="text"
                className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                placeholder="Search"
              />
            </div>
            <div className="flex flex-col justify-between flex-1 mt-6">
              <nav>
                <a
                  className="flex items-center px-4 py-2 my-8 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200"
                  href=""
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    className="mx-4 font-medium"
                    onClick={() => setChoice("view")}
                  >
                    View Profile
                  </span>
                </a>
                <a
                  className="flex items-center px-4 py-2 my-8 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200"
                  href="#"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    className="mx-4 font-medium"
                    onClick={() => setChoice("resume")}
                  >
                    Upload Resume
                  </span>
                </a>{" "}
                <a
                  className="flex items-center px-4 py-2 my-8 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200"
                  href="#"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    className="mx-4 font-medium"
                    onClick={() => setChoice("team")}
                  >
                    My Teams
                  </span>
                </a>{" "}
                <a
                  className="flex items-center px-4 py-2 my-8 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200"
                  href="#"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    className="mx-4 font-medium"
                    onClick={() => setChoice("create")}
                  >
                    Create Team
                  </span>
                </a>{" "}
                <a
                  className="flex items-center px-4 py-2 my-8 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200"
                  href="#"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    className="mx-4 font-medium"
                    onClick={() => setChoice("invitation")}
                  >
                    View Invitation
                  </span>
                </a>
                {/* Other navigation links */}
              </nav>
            </div>
          </aside>
        )}
      </div>
      {choice === "view" && <View />}
      {choice === "team" && <Team />}
      {choice === "invitation" && <Invitations />}
      {choice === "create" && <Create />}
      {choice === "resume" && <Resume />}
    </div>
  );
};

export default User;
