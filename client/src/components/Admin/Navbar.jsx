import { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";

import { useSelector, useDispatch } from "react-redux";
import {
  showSidebar,
  hideSidebar,
  setScreenSize,
} from "../../redux/features/dashboardSlice";
import { setIsClicked } from "../../redux/features/navlinkSlice";

import Profile from "./Profile";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <button
    type="button"
    onClick={() => customFunc()}
    style={{ color }}
    className="relative text-xl rounded-full p-3 hover:bg-light-gray"
  >
    <span
      style={{ background: dotColor }}
      className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
    />
    {icon}
  </button>
);

const Navbar = () => {
  const { activeMenu } = useSelector((state) => state.dashboardContext);

  const isClicked = useSelector((state) => state.navlinkContext);

  const dispatch = useDispatch();

  const handleActiveMenu = () => {
    if (activeMenu) {
      dispatch(hideSidebar());
    } else {
      dispatch(showSidebar());
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const newScreenSize = window.innerWidth;
      dispatch(setScreenSize(newScreenSize));

      if (newScreenSize <= 1060) {
        dispatch(hideSidebar());
      } else {
        dispatch(showSidebar());
      }
    };

    window.addEventListener("resize", handleResize);

    // Initial setup
    handleResize();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);

  const handleClick = (clicked) => {
    // console.log(user);
    dispatch(setIsClicked(clicked));
  };

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <NavButton
        title="Menu"
        customFunc={handleActiveMenu}
        color="#03C9D7"
        icon={<AiOutlineMenu />}
      />

      <div className="flex">
        <div
          className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
          onClick={() => handleClick("userProfile")}
        >
          <p>
            <span className="text-white text-14">Hi,</span>{" "}
            <span className="text-white font-bold ml-1 text-14"></span>
          </p>
          <MdKeyboardArrowDown className="text-gray-400 text-14" />
        </div>

        {isClicked.userProfile && <Profile />}
      </div>
    </div>
  );
};

export default Navbar;
