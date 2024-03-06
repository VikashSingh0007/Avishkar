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
      <section className="text-gray-900 body-font rumoura-font">
        <div className="flex justify-center m-4">
          <div className="rounded-2xl  mt-20 w-full w-40 lg:w-[40] md:w-[60vw] xs:h-[60vh] sm:h-[60vh] overflow-auto border-black border-2 p-5 bg-gray-100 text-gray-800">
            <div className="h-full gap-[3rem] flex flex-col items-center sm:justify-start text-center sm:text-left">
              <h2 className="text-black text-4xl flex justify-center font-medium title-font ">
                Create Team
              </h2>
              <div className="relative  mb-1">
                <label
                  htmlFor="full-name"
                  className="leading-7   text-2xl text-gray-900"
                >
                  Team Name
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  id="full-name"
                  name="teamName"
                  className="w-full h-[5vh]
                text-4xl bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-green-900 rounded border border-gray-600 focus:border-green-500  outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out
                "
                />
              </div>
              <div className="mb-1">
                <label
                  htmlFor="teamSize"
                  className="leading-7  text-2xl text-gray-900"
                >
                  Team Size
                </label>

                <select
                  onChange={handleChange}
                  name="teamSize"
                  className="w-full h-[5vh] bg-gray-900 text-black bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-green-300 rounded border border-gray-900 focus:border-green-500  outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-2xl mt-2"
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
                </select>
              </div>
              <button
                className="text-white text-4xl bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded "
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
