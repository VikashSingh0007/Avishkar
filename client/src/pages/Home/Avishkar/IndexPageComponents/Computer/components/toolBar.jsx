import { useEffect, useState } from "react";
import windowButton from "./images/windows.png";

const ToolBar = ({ switchMenu, computerOn }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  
  return (
    <div className="flex-row  h-full">
      <div className="h-[80%] w-[10%]">
        <img
          src={windowButton}
          alt="windowButton"
          className="h-full w-full object-contain"
          onClick={switchMenu}
        />
        <div
          className={`h-[10%] absolute flex flex-col items-center bottom-[3%] right-[4%] ${
            computerOn ? "text-[60%]" : "text-[70%]"
          } font-bold text-white`}
        >
          <p>
            {formattedTime}
          </p>
          {/* <p>{formattedDate}</p> */}
        </div>
      </div>
    </div>
  );
};

export default ToolBar;
