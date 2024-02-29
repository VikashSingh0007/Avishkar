import { useState } from "react";
import Folder from "./folder";

const DeskTopScreen = ({ changeScreen }) => {
  const [selectedFolder, setSelectedFolder] = useState(null);

  const icons = {
    folder: (
      <svg
        className="w-[50%]  text-yellow-500 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M4 4a2 2 0 0 0-2 2v12.6l3-8a1 1 0 0 1 1-.6h12V9a2 2 0 0 0-2-2h-4.5l-2-2.3A2 2 0 0 0 8 4H4Zm2.7 8h-.2l-3 8H18l3-8H6.7Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    recycleBin: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="w-[50%] text-gray-200 bi bi-trash2-fill"
        viewBox="0 0 16 16"
        id="IconChangeColor"
      >
        {" "}
        <path
          d="M2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z"
          id="mainIconPathAttribute"
        ></path>{" "}
      </svg>
    ),
    thisPC: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        className="w-[50%] text-gray-200 bi bi-briefcase-fill"
      >
        <path d="M7 17H2a2 2 0 0 1-2-2V2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-5l4 2v1H3v-1l4-2zM2 2v11h16V2H2z" />
      </svg>
    ),
  };

  const handleSelection = (folder) => {
    setSelectedFolder(folder);
  };

  const unSelectFolder = () => {
    console.log("unselected");
    setSelectedFolder(null);
  };

  const handleDbClick = (e)=>{
    e.preventDefault();
    e.stopPropagation();
    console.log("db")
  }

  return (
    <div className="flex flex-row w-full mt-[1.5%]">
      <div className="w-[20%] h-full ">
        {/* <ThisPc /> */}
        <Folder
          icon={icons.thisPC}
          title="This PC"
          handleDoubleClick={() => {
            changeScreen("pc");
          }}
          currScreen="desktop"
          handleSelection={handleSelection}
          selectedFolder={selectedFolder}
        />
        <Folder
          icon={icons.recycleBin}
          title="Recycle Bin"
          currScreen="desktop"

          handleDoubleClick={() => {
            changeScreen("recycleBin");
          }}
          handleSelection={handleSelection}
          selectedFolder={selectedFolder}
        />
        <div onDoubleClick={handleDbClick}>
        <Folder
          icon={icons.folder}
          title="Avishkar"
          currScreen="desktop"

          handleDoubleClick={() => {
            changeScreen("events");
          }}
          handleSelection={handleSelection}
          selectedFolder={selectedFolder}
        />
        </div>
      </div>
      <div className="w-[80%]" onClick={unSelectFolder}>
      </div>
    </div>
  );
};

export default DeskTopScreen;
