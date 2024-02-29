// PowerOnButton.js

import "./powerOnButton.css";

const PowerOnButton = () => {
  return (
    <div className="flex flex-row justify-center items-center h-full w-full">
      <div className="bg-red-600 rounded-full w-[80%] h-[80%] power-on-button flex flex-row justify-center items-center">
        <div className="bg-red-800 rounded-full w-[50%] h-[60%] power-on-button"></div>
      </div>
    </div>
  );
};

export default PowerOnButton;
