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
      <section className=" body-font text-white ">
        <div className="flex lg:justify-center m-4  ">
          <div
            className="rounded-2xl bg-gradient-to-b from-[#63462D]  mt-20 w-full  lg:w-[40] md:w-[60vw] xs:h-[60vh] sm:h-[60vh] overflow-auto  p-5  text-gray-800"
            style={{
              boxShadow: "0px 10px 10px black",
            }}
          >
            <div className="h-full gap-[3rem] flex flex-col items-center justify-start text-center sm:text-left">
              <div className="text-white lg:text-[2.5em] md:text-[1.5em] text-[1.2em]  flex justify-center font-medium title-font ">
                Create Team
              </div>
              <div className="relative  mb-1">
                <label
                  htmlFor="full-name"
                  className="leading-7  lg:text-[1.8em] md:text-[1.2em] text-[1em]  text-white"
                >
                  Team Name
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  id="full-name"
                  name="teamName"
                  className="w-full h-[5vh] text-3xl
                   text-white bg-opacity-20 focus:bg-transparent focus:ring-2  rounded border py-1 px-3 
                "
                />
              </div>
              <div className="mb-1">
                <label
                  htmlFor="teamSize"
                  className="leading-7  text-2xl text-white  lg:text-[1.8em] md:text-[1.2em] text-[1em] "
                >
                  Team Size
                </label>

                <select
                  onChange={handleChange}
                  name="teamSize"
                  className="w-full h-[5vh] bg-gray-900  bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-[#63462D] rounded border border-gray-900  outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-2xl mt-2"
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
                className="text-white text-4xl bg-[#63462D] hover:bg-[#423C31]  border-0 py-2 px-8 focus:outline-none rounded-xl "
                onClick={handleSubmit}
                style={{
                  boxShadow: "0px 5px 5px black",
                }}
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
