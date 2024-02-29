import { Link, NavLink } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import { links } from "../../constants/Admin";
import { useSelector, useDispatch } from "react-redux";
import { hideSidebar } from "../../redux/features/dashboardSlice";

const Sidebar = () => {
  const { activeMenu, screenSize } = useSelector(
    (state) => state.dashboardContext
  );

  const dispatch = useDispatch();
  const currentColor = "#03C9D7";

  const handleSidebar = () => {
    if (activeMenu && screenSize <= 900) {
      dispatch(hideSidebar());
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-white hover:text-emerald-300 hover:bg-light-gray m-2";

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 ">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/Dashboard"
              className="items-center gap-3 ml-3 mt-4 flex text-xl text-black font-extrabold tracking-tight text-white"
            >
              <span>Admin Panel</span>
            </Link>
          </div>
          <div className="mt-10 ">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-white m-3 mt-4 uppercase font-bold hover:text-cyan-400">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.link}`}
                    key={link.name}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : "",
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize ">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
