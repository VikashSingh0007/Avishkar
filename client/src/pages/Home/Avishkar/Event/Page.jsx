import "./page.css";
import { useNavigate, useParams } from "react-router-dom";
import background from "./img.jpg";
import React, { useEffect, useState } from "react";
import Navbar from "../../../Home/Navbar";
import Modal from "./modal.jsx";
import { getAllParticipating } from "../../../../services/teamService.js";
import { toast } from "react-toastify";
import Loader from "../../../Home/loader.jsx";
import "./page.css";
import retroImg from "../../assets/radio.jpg";
import Footer from "../../Footer.jsx";

const Page = () => {
  const { data } = useParams();
  const decodedData = JSON.parse(decodeURIComponent(data));
  const [showModal, setShowModal] = useState(false);
  const [fetchedData, setFetchedData] = useState();
  const navigate = useNavigate();
  const [isloading, setLoading] = useState(false);
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
        setLoading(true);
        const data = await getAllParticipating();
        console.log("gotted from loki ", data);
        setFetchedData(data);
        setLoading(false);
        console.log(typeof data.teams);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching data:", error);
      }
    };
    setShowModal(true);
    fetchData();
  };
  // useEffect(, []);

  return (
    <>
      <div className="top-0 left-0 w-full h-auto containerPage flex flex-col ">
        <div className="absolute z-[-1] top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="fixed left-0 w-full h-full flex">
            <img
              src={retroImg}
              alt="mnnitImg"
              className=" object-cover w-full h-full "
            />
          </div>
        </div>
        <div>
          {isloading && <Loader />}
          {showModal && (
            <div className="flex justify-center items-center ">
              <Modal
                teams={fetchedData?.teams?.participating}
                setShowModal={setShowModal}
                event={decodedData.name}
              />
            </div>
          )}
          {showModal === false && (
            <div>
              <div>
                <Navbar />
              </div>
              <div className=" inset-0 bg-black opacity-0 "></div>
              <div className=" inset-0 ">
                {/* Your other content goes here */}
                <div className="">
                  <div>
                    <div className="flex justify-center h-auto">
                      <div className="w-full lg:w-[60%] max-w-[90%]">
                        <div
                          style={{
                            backdropFilter: "blur(5px)",
                          }}
                          // className={blurproperty}
                        >
                          <div>
                            <div
                              className="flex justify-center text-white tracking-widest  text-justify text-[2rem] sm:text-[3rem] font-semibold py-8 protest-revolution-regular2 rumoura-font mt-16"
                              style={{
                                fontWeight: "bolder",
                                textAlign: "center",
                                textShadow: "0 0 15px black", // Add white shadow with 10px blur
                              }}
                            >
                              {decodedData.name}
                            </div>
                            <div
                              className="flex justify-center text-white tracking-widest  text-justify text-[1.5rem] sm:text-[2rem] font-semibold rumoura-font "
                              style={{
                                fontWeight: "bolder",
                                textAlign: "center",
                                textShadow: "0 0 15px black", // Add white shadow with 10px blur
                              }}
                            >
                              Description
                            </div>
                            <div
                              className="flex bg-[#63472DE6] text-white mt-2 justify-center py-4 px-6 kelly-slab-regular text-xl border border-black rounded-lg"
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
                              className="flex text-white tracking-widest w-full justify-center mt-6  text-justify text-[1.5rem] sm:text-[2rem] font-semibold rumoura-font "
                              style={{
                                textShadow: "0px 0px 10px black",
                              }}
                            >
                              Rules
                            </div>
                            <div className="flex text-xl sm:text-xl justify-center py-4 kelly-slab-regular text-justify">
                              <div className="flex flex-col">
                                {decodedData.rule.map((ruleObj, index) => (
                                  <div
                                    key={index}
                                    className="croissant-one-regular text-white text-2xl sm:text-xl mb-2"
                                    style={{
                                      textShadow: "0px 0px 10px black",
                                    }}
                                  >
                                    {Object.entries(ruleObj).map(
                                      ([key, value]) => (
                                        <div key={key}>
                                          {"❖ "}
                                          {value}
                                        </div>
                                      )
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="flex justify-center tracking-widest text-justify text-[1.5rem] sm:text-[2rem] py-4  font-semibold rumoura-font text-white">
                              Coordinators
                            </div>
                            <div className="flex text-2xl justify-center py-4">
                              <ol className="flex flex-col text-white lg:flex-row space-x-4">
                                {decodedData.coordinators.map(
                                  (coordinator, index) => (
                                    <li
                                      key={index}
                                      className="croissant-one-regular text-2xl sm:text-xl"
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
    </>
  );
};

export default Page;
