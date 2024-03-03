import styles from "../../style.js";

import Navbar from "./HomepageNav.jsx";
import Footer from "./Footer.jsx";
import "./HomePageLatout.css";
const HomePageLayout = ({ children }) => (
  <div
    className="bg-black min-h-screen overflow-hidden containerHomePage"
    // style={{ backgroundImage: `url(${BackGroundImage})` }}
  >
    {/* <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div> */}

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {children} <Footer />
      </div>
    </div>
  </div>
);

export default HomePageLayout;
