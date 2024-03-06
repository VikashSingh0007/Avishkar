import styles, { layout } from "../../style";

import { useNavigate } from "react-router-dom";
import "./AboutAvishkarCulrav.css";
const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div>
      <section id="product" className={layout.sectionReverse}>
        <div className={layout.sectionInfo}>
          <h2
            className="text-3xl text-black font-bold mb-4  justify-center rumoura-font "
            style={{
              fontSize: "xx-large",
              fontWeight: "bolder",
              textAlign: "center",
            }}
          >
            About Culrav-Avishkar 2024
          </h2>
          <h6 className=" text-xl text-justify rumoura-font">
            CULRAV-AVISHKAR 2024, Techno-Cultural Fest at MNNIT Allahabad,
            Prayagraj, is an electrifying extravaganza that seamlessly merges
            technology with cultural diversity. Featuring dynamic competitions,
            captivating performances, And insightful workshops, it serves as a
            melting pot of innovation And expression.
          </h6>
        </div>
        <div className={layout.sectionImgReverse}>
          <div id="recorder">
            <div className="reel">
              <div className="slice"></div>
              <div className="slice"></div>
              <div className="slice"></div>
              <div className="tape"></div>
            </div>
            <div className="reel">
              <div className="slice"></div>
              <div className="slice"></div>
              <div className="slice"></div>
              <div className="tape"></div>
            </div>
            <div className="mecha">
              <div className="tape"></div>
              <div className="tape"></div>
              <div className="tape"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
