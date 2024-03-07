import styles from "../../style.js";
import Footer from "./Footer.jsx";
import Video from "./Video.jsx";
import Navbar from "./Navbar.jsx";
import "./HomePageLatout.css";

const HomePageLayout = ({ children }) => (
  <div
    className=" min-h-screen overflow-hidden containerHomePage "
    // style={{ backgroundImage: `url(${BackGroundImage})` }}
  >
    <div className="  hidden sm:flex">
      <Navbar />
    </div>
    
    <div className="-mt-[2px] ">
      <Video />
    </div>

    <div
      className={` ${styles.paddingX} ${styles.flexCenter} bg-opacity-20 relative z-10`}
      style={{ boxShadow: "20 0px 10px 0 rgba(255,165,0, 5)" }}
    >
      <div className={`${styles.boxWidth}`}>{children}</div>
    </div>
    <div
      className={`  ${styles.flexCenter} bg-opacity-20 relative z-10`}
      style={{ boxShadow: "20 0px 10px 0 rgba(255,165,0, 5)" }}
    >
      {" "}
      <Footer />
    </div>
  </div>
);

export default HomePageLayout;
