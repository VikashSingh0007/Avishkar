import { useState } from "react";
import { createTeam } from "../../services/teamService";
import "./user.css";

const Create = () => {
  const [data, setData] = useState({});

  const handleSubmit = () => {
    const messageData = {
      teamName: data.teamName,
      teamSize: data.teamSize,
    };
    console.log("creating Team");
    createTeam(messageData).then((res) => {
      console.log(res);
    });
  };

  function handleChange(e) {
    setData((old) => {
      return {
        ...old,
        [e.target.name]: e.target.value,
      };
    });
  }

  return (
    <div>
      <section className="text-white body-font rumoura-font h-[80%]">
        <div className="flex justify-center m-4">
          <div className="rounded-2xl mt-20 w-full lg:w-[40] md:w-[60vw] xs:h-[60vh] sm:h-[60vh] overflow-auto border-none  border-2 p-5 bg-gradient-to-b shadow-2xl  from-orange-[#FFA500] to-white">
            <div className="text-black  h-full gap-[3rem] flex flex-col items-center sm:justify-start text-center sm:text-left">
              <h2 className="text-4xl flex justify-center font-medium title-font ">
                Create Team
              </h2>
              <div className="relative mb-4">
                <label htmlFor="full-name" className="leading-7 text-2xl">
                  Team Name
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  id="full-name"
                  name="teamName"
                  className="w-full h-[5vh] text-4xl bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-green-900 rounded border border-gray-600 focus:border-orange-500 outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="teamSize" className="leading-7 text-2xl">
                  Team Size
                </label>
                <select
                  onChange={handleChange}
                  name="teamSize"
                  className="text-black w-full h-[5vh] bg-gray-900 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-orange-300 rounded border border-gray-900 focus:border-orange-500 outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-2xl mt-2"
                >
                  <option className="text-black" value="1">
                    1
                  </option>
                  <option className="text-black" value="2">
                    2
                  </option>
                  <option className="text-black" value="3">
                    3
                  </option>
                  <option className="text-black" value="4">
                    4
                  </option>
                  <option className="text-black" value="5">
                    5
                  </option>
                  <option className="text-black" value="5">
                    6
                  </option>
                  <option className="text-black" value="5">
                    7
                  </option>
                  <option className="text-black" value="5">
                    8
                  </option>
                  <option className="text-black" value="5">
                    9
                  </option>
                  <option className="text-black" value="5">
                    10
                  </option>
                </select>
              </div>
              <button
                className="text-black text-4xl bg-white border-0 py-2 px-8 focus:outline-none hover:bg-gray-300 rounded"
                onClick={handleSubmit}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Create;
