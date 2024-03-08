import React, { useEffect } from "react";
import "./team.css"; // Replace with the actual CSS file path
import Navbar from "../Home/Navbar";
import team from "../../Data/Event/Team";
import { SocialIcon } from "react-social-icons";
const Team = () => {
  
  return (
    <>
      <main
        className="containerAcco"
      >
        <Navbar page="Team" />

        <div className="flex text-black justify-center pt-24 text-4xl font-bold rumoura-font">
          TEAM
        </div>

        {team.map((department, index) => (
          <div key={index}>
            <div className="flex text-black justify-center mt-5 text-[5vw] sm:text-[2vw]  rumoura-font">
              {department.department}
            </div>

            <div id="gallery">
              {department.data.map((sponsor, sponsorIndex) => (
                <div className="figure_1 active" key={sponsorIndex}>
                  <img
                    src={sponsor.image}
                    alt="Pink and blue clouds at sunset"
                  />
                  <span className="text-xl font-bold">{sponsor.name}</span>
                  <br />
                  {department.department === "Departmental Coordinator" ? (
                    <span className="text-sl ">
                      {sponsor.department}
                      <br />

                      <a
                        href={`https://www.instagram.com/${sponsor.instagram_username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=""
                      >
                       <SocialIcon url={`https://www.instagram.com/${sponsor.instagram_username}`}/>
                      </a>
                      <a
                        href={`${sponsor.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SocialIcon url={`${sponsor.linkedin}`}/>
                      </a>
                    </span>
                  ) : department.department === "Director" ||
                    department.department === "SAC President" ||
                    department.department === "Faculty Incharge" ? (
                    <a
                      href={sponsor.Profile_Url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        marginLeft: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "bold",
                        color: "#4CAF50",
                        textDecoration: "none",
                        fontSize: "18px",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      Visit Profile
                    </a>
                  ) : (
                    <>
                      <span className="text-sl">
                        <a
                          href={`https://www.instagram.com/${sponsor.instagram_username}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <SocialIcon url={`https://www.instagram.com/${sponsor.instagram_username}`}/>
                        </a>
                        <a
                           href={`${sponsor.linkedin}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                         <SocialIcon url={`${sponsor.linkedin}`}/>
                        </a>
                      </span>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>
    </>
  );
};
export default Team;
