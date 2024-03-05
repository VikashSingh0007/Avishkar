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
    <div className="mb-20">
      <Navbar />
    </div>

    <Video />
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {children} <Footer />
      </div>
    </div>
  </div>
);

export default HomePageLayout;
