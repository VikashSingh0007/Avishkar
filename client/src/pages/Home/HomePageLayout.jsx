import styles from "../../style.js";
import Footer from "./Footer.jsx";
import Video from "./Video.jsx";
import Navbar from "./Navbar.jsx";
import "./HomePageLatout.css";

const HomePageLayout = ({ children }) => (
  <div
    className=" mt-[72px] min-h-screen overflow-hidden containerHomePage"
    // style={{ backgroundImage: `url(${BackGroundImage})` }}
  >
    <div className="  hidden sm:flex">
      <Navbar />
    </div>
    
    <div className="-mt-[2px] ">
      <Video />
    </div>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {children} <Footer />
      </div>
    </div>
  </div>
);

export default HomePageLayout;
