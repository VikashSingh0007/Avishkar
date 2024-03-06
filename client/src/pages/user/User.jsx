import { useState, useEffect, useRef } from "react";
import View from "./View";
import Team from "./Team";
import Invitations from "./Invitations";
import Create from "./Create";
import Resume from "./Resume";
import Navbar from "../Home/Navbar";
const User = () => {
  const [choice, setChoice] = useState("view");
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div
      className="absolute top-0 left-0 w-full h-full overflow-hidden flex flex-col"
      style={{
        background:
          "linear-gradient(to bottom, #d95f3b, #f0984a, #fcd6a5, #7aa9a3, #338f9a, #1c4c70) ",
      }}
    >
      <div className="h-[10%] ">
        <Navbar />
      </div>
      <div className="h-[90%] ">
        <div className=" h-full overflow-hidden flex flex-col  lg:flex-row p-3 mb-2 items-center">
          <div className="w-full hidden  lg:flex lg:flex-col flex-wrap gap-2  lg:w-[15%] rounded-lg p-4 bg-gray-900 bg-opacity-20 shadow-lg backdrop-filter backdrop-blur-md">
            <a
              className="flex items-center px-4 py-2 lg:my-8 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200"
              href="#"
              style={choice === "view" ? { backgroundColor: "orange" } : null}
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
                onClick={() => {
                  setChoice("view");
                }}
              >
                View Profile
              </span>
            </a>
            <a
              className="flex items-center px-4 py-2 lg:my-8 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200"
              href="#"
              style={choice === "resume" ? { backgroundColor: "orange" } : null}
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
                onClick={() => {
                  setChoice("resume");
                }}
              >
                Upload Resume
              </span>
            </a>{" "}
            <a
              className="flex items-center px-4 py-2 lg:my-8 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200"
              href="#"
              style={choice === "team" ? { backgroundColor: "orange" } : null}
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
                onClick={() => {
                  setChoice("team");
                }}
              >
                My Teams
              </span>
            </a>{" "}
            <a
              className="flex items-center px-4 py-2 lg:my-8 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200"
              href="#"
              style={choice === "create" ? { backgroundColor: "orange" } : null}
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
                onClick={() => {
                  setChoice("create");
                }}
              >
                Create Team
              </span>
            </a>{" "}
            <a
              className="flex items-center px-4 py-2 lg:my-8 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200"
              href="#"
              style={
                choice === "invitation" ? { backgroundColor: "orange" } : null
              }
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
                onClick={() => {
                  setChoice("invitation");
                }}
              >
                View Invitation
              </span>
            </a>
            {/* Other navigation links  */}
          </div>
          {/* Mobile View */}
          <div className="relative h-[10%] lg:hidden inline-block text-left w-full">
            <div onClick={()=>{setShowMenu(!showMenu)}}>
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border   px-4 py-2bg-gray-900 bg-opacity-20 shadow-lg backdrop-filter backdrop-blur-md text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-black"
                id="options-menu"
                aria-haspopup="true"
                aria-expanded="true"
              >
                {/* Arrow down icon */}
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {/* Dropdown menu */}
            {showMenu && (
              <div
                className="origin-top-right z-[2] absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div className="py-1" role="none">
                  <button
                    onClick={() => {setChoice("profile"); setShowMenu(false)}}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    View Profile
                  </button>

                  <button
                    onClick={() => {setChoice("resume"); setShowMenu(false);}}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    upload Resume
                  </button>
                  <button
                    onClick={() => {setChoice("team"); setShowMenu(false)}}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    My Teams
                  </button>
                  <button
                    onClick={() => {setChoice("create"); setShowMenu(false)}}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Create Team
                  </button>
                  <button
                    onClick={() => {setChoice("invitations"); setShowMenu(false);}}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    View Invitations
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="flex w-full h-full  items-center mt-2 ml-2 bg-gray-600 bg-opacity-20 rounded shadow-lg backdrop-filter backdrop-blur-md justify-center md:w-[85%] overflow-y-scroll">
            {choice === "view" && <View />}
            {choice === "team" && <Team />}
            {choice === "invitation" && <Invitations />}
            {choice === "create" && <Create />}
            {choice === "resume" && <Resume />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
