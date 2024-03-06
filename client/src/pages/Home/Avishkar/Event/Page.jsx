import "./page.css";
import { useParams } from "react-router-dom";
import background from "./img.jpg";
import React, { useEffect, useState } from "react";
import Navbar from "../../../Home/Navbar";
import Modal from "./modal.jsx";
import { getAllParticipating } from "../../../../services/teamService.js";

const Page = () => {
  const { data } = useParams();
  const decodedData = JSON.parse(decodeURIComponent(data));
  const [showModal, setShowModal] = useState(false);
  const [fetchedData, setFetchedData] = useState();

  console.log(decodedData);

  const handleClick = () => {
    setShowModal(true);
  };
  useEffect(() => {
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

    fetchData();
  }, []);

  const blurproperty = `flex text-gray-300 justify-center bg-opacity-15  backdrop-blur-sm p-8 rounded-md shadow-md`;
  return (
    <>
      {showModal && (
        <div
          className="flex justify-center items-center h-[100vh]"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, #d95f3b, #f0984a, #fcd6a5, #7aa9a3, #338f9a, #1c4c70)",
          }}
        >
          <Modal
            teams={fetchedData.teams.participating}
            setShowModal={setShowModal}
            event={decodedData.name}
          />
        </div>
      )}
      {showModal === false && (
        <div
          className="h-[100vh]"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, #d95f3b, #f0984a, #fcd6a5, #7aa9a3, #338f9a, #1c4c70)",
          }}
          // style={{ backgroundImage: `url(${background})` }}
        >
          <div>
            <Navbar />
          </div>
          <div className="absolute inset-0 bg-black opacity-0 "></div>
          <div className="absolute inset-0 overflow-y-auto ">
            {/* Your other content goes here */}
            <div className="">
              <div
                style={
                  {
                    // backdropFilter: "blur(5px)", // Adjust the blur value as needed
                  }
                }
                // className={blurproperty}
              >
                <div className="flex justify-center ">
                  <div className="w-full lg:w-[60%] max-w-[90%]">
                    <div
                      style={{
                        backdropFilter: "blur(5px)",
                      }}
                      // className={blurproperty}
                    >
                      <div>
                        <div className="flex justify-center text-4xl font-semibold py-8 protest-revolution-regular2 rumoura-font mt-16">
                          {decodedData.name}
                        </div>
                        <div className="flex justify-center text-2xl py-4 text-4xl font-semibold rumoura-font underline">
                          Description
                        </div>
                        <div className="flex justify-center py-4 px-6 kelly-slab-regular text-xl border border-black rounded-lg">
                          <h4 className="text-xl sm:text-xl text-justify">
                            {decodedData.disc}
                          </h4>
                        </div>

                        <div className="flex justify-center py-4 text-4xl font-semibold rumoura-font underline">
                          Rules
                        </div>
                        <div className="flex text-xl sm:text-xl justify-center py-4 kelly-slab-regular  text-justify">
                          <ol>
                            {decodedData.rule.map((ruleObj, index) => (
                              <li key={index}>
                                {Object.entries(ruleObj).map(([key, value]) => (
                                  <div key={key}>
                                    {"❖ "}
                                    {value}
                                  </div>
                                ))}
                              </li>
                            ))}
                          </ol>
                        </div>

                        <div className="flex justify-center py-4 text-4xl font-semibold rumoura-font underline">
                          Coordinators
                        </div>
                        <div className="flex text-2xl justify-center py-4">
                          <ol className="flex flex-col lg:flex-row space-x-4">
                            {decodedData.coordinators.map(
                              (coordinator, index) => (
                                <li
                                  key={index}
                                  className="flex flex-col items-center kelly-slab-regular text-lg"
                                >
                                  <div>{coordinator.name}</div>
                                  <div>{coordinator.phone}</div>
                                </li>
                              )
                            )}
                          </ol>
                        </div>
                      </div>
                    </div>
                    <button
                      className="btn2 mb-5"
                      style={{ display: "block", margin: "0 auto" }}
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
    </>
  );
};

export default Page;
