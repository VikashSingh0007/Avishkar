import styles, { layout } from "../../style";

import { useNavigate } from "react-router-dom";
import "./AboutAvishkarCulrav.css";
const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div>
      <section id="product" className={`${layout.sectionReverse} `}>
        <div className={layout.sectionInfo}>
          <h2
            className="font-Robo md:text-[2.5rem] text-[1.8rem] text-black font-bold mb-4  justify-center rumoura-font "
            style={{
              fontWeight: "bolder",
              textAlign: "center",
              textShadow: "0 0 10px white",
            }}
          >
            About Culrav-Avishkar 2024
          </h2>
          <h6
            className="font-Robo md:text-[1.5rem] text-[1.2rem] text-justify text-white "
            // style={{
            //   fontWeight: "bolder",
             
            //   textShadow: "0 0 5px white",
            // }}
          >
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
