import "./page.css";
import { useNavigate, useParams } from "react-router-dom";
import background from "./img.jpg";
import React, { useEffect, useState } from "react";
import Navbar from "../../../Home/Navbar";
import Modal from "./modal.jsx";
import { getAllParticipating } from "../../../../services/teamService.js";
import { toast } from "react-toastify";
import "./avishkarPage.css";
import Footer from "../../Footer.jsx";
import retroImg from "../../assets/balancer.jpg";

const AvishkarPage = () => {
  const { data } = useParams();
  const decodedData = JSON.parse(decodeURIComponent(data));
  const [showModal, setShowModal] = useState(false);
  const [fetchedData, setFetchedData] = useState();
  const navigate = useNavigate();
  console.log(decodedData);

  const handleClick = async () => {
    const userData = localStorage.getItem("userData");
    const userToken = localStorage.getItem("userToken");
    if (!userToken || !userData) {
      toast.info("Login First To Register");
      navigate("/login");

      return;
    }
    const fetchData = async () => {
      try {
        const data = await getAllParticipating();
        console.log("gotted from loki ", data);
        setFetchedData(data);
        console.log(typeof data.teams);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    setShowModal(true);
    fetchData();
  };

  return (
    <div className="containerRulesPage flex flex-col">
      <div className="absolute z-[-1] top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="fixed left-0 w-full h-full flex justify-center items-center">
          {/* <div className="absolute  transform -translate-x-1/2 -translate-y-1/2"> */}
          <img
            src={retroImg}
            alt="mnnitImg"
            className=" object-cover w-full h-full"
          />
          {/* </div> */}
        </div>
      </div>
      <div>
        {showModal && (
          <div className="flex justify-center items-center h-[100vh]">
            <Modal
              teams={fetchedData?.teams?.participating}
              setShowModal={setShowModal}
              event={decodedData.name}
            />
          </div>
        )}
        {showModal === false && (
          <div className="h-[100vh]">
            <div>
              <Navbar />
            </div>
            <div className="absolute inset-0 bg-black opacity-0 "></div>
            <div className="absolute inset-0 ">
              <div className="">
                <div
                  style={{
                    backdropFilter: "blur(5px)",
                  }}
                >
                  <div className="flex justify-center ">
                    <div className="w-full lg:w-[60%] max-w-[90%]">
                      <div
                        style={{
                          backdropFilter: "blur(5px)",
                        }}
                      >
                        <div>
                          <div
                            className="flex justify-center tracking-widest  text-justify text-[2rem] sm:text-[3rem] font-semibold py-8 protest-revolution-regular2 rumoura-font mt-16 text-white"
                            style={{
                              fontWeight: "bolder",
                              textAlign: "center",
                              textShadow: "0 0 15px black", // Add white shadow with 10px blur
                            }}
                          >
                            {decodedData.name}
                          </div>
                          <div
                            className="flex justify-center  text-[2rem] sm:text-[2.5rem] font-semibold rumoura-font  text-white"
                            style={{
                              fontWeight: "bolder",
                              textAlign: "center",
                              textShadow: "0 0 15px black", // Add white shadow with 10px blur
                            }}
                          >
                            Description
                          </div>
                          <div
                            className="flex bg-[#63472DE6] mt-3 justify-center py-4 px-6 text-xl border  rounded-lg text-white"
                            style={{
                              boxShadow: "0px 10px 10px black",
                              textShadow: "0px 0px 10px black",
                              border: "none",
                            }}
                          >
                            <h4 className="text-xl sm:text-2xl text-justify croissant-one-regular">
                              {decodedData.disc}
                            </h4>
                          </div>

                          <div
                            className="flex justify-center py-4 mt-5 text-4xl font-semibold rumoura-font  text-white"
                            style={{
                              textShadow: "0px 0px 10px black",
                            }}
                          >
                            Rules
                          </div>
                          <div className="flex text-xl sm:text-xl justify-center py-4 kelly-slab-regular text-justify text-white">
                            <ol>
                              {decodedData.rule.map((ruleObj, index) => (
                                <li
                                  className="croissant-one-regular text-2xl sm:text-xl"
                                  style={{
                                    textShadow: "0px 0px 10px black",
                                  }}
                                  key={index}
                                >
                                  {Object.entries(ruleObj).map(
                                    ([key, value], innerIndex) => (
                                      <div key={innerIndex}>
                                        {"❖ "}
                                        {value}
                                      </div>
                                    )
                                  )}
                                </li>
                              ))}
                            </ol>
                          </div>

                          <div
                            className="flex justify-center py-4 text-4xl font-semibold rumoura-font text-white"
                            style={{
                              textShadow: "0px 0px 10px black",
                            }}
                          >
                            Coordinators
                          </div>
                          <div className="flex text-3xl justify-center py-4 text-white">
                            <ol className="flex flex-col lg:flex-row space-x-4">
                              {decodedData.coordinators.map(
                                (coordinator, index) => (
                                  <li
                                    key={index}
                                    className="flex flex-col items-center text-xl text-white croissant-one-regular"
                                    style={{
                                      textShadow: "0px 0px 10px black",
                                    }}
                                  >
                                    <div>{coordinator.name}</div>
                                    {/* <div>{coordinator.phone}</div> */}
                                  </li>
                                )
                              )}
                            </ol>
                          </div>
                        </div>
                      </div>
                      <button
                        className="flex mx-auto mt-8 bg-[#63462DE6] hover:bg-[#3c2b1de6] text-white text-[1rem] sm:text-[1.4rem] font-bold py-2 px-6 rounded-full"
                        style={{
                          boxShadow: "0 0 20px black", // Add white shadow with 10px blur
                        }}
                        onClick={() => handleClick()}
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AvishkarPage;
