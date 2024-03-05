import styles from "../../style.js";
import Footer from "./Footer.jsx";
import Video from "./Video.jsx";
import Navbar from "./Navbar.jsx";
import "./HomePageLatout.css";

const HomePageLayout = ({ children }) => (
  <div
    className="bg-black min-h-screen overflow-hidden containerHomePage"
    // style={{ backgroundImage: `url(${BackGroundImage})` }}
  >
    <div className="mb-20 hidden sm:flex">
      <Navbar />
    </div>
    <div className="sm:hidden z-[5] absolute top-0 left-0 w-full bg-yellow-200">
      <Navbar />
    </div>
    <div className="">
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
