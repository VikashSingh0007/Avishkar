import { useState } from "react";

const Create = () => {
  const [data, setData] = useState({});

  const handleSubmit = () => {
    console.log(data);
    const messageData = {
      teamName: data.teamName,
      teamSize: data.teamSize,
    };
    console.log(messageData);
  };
  function handleChange(e) {
    setData((old) => {
      return {
        ...old,
        [e.target.name]: e.target.value,
      };
    });
    console.log(data);
  }
  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className=" px-5 py-24  flex justify-center ">
          <div className=" md:w-1/4 flex  flex-col justify-center h-[70vh] bg-gray-800 bg-opacity-50 rounded-lg p-8  w-full mt-10 md:mt-0">
            <h2 className="text-white text-4xl flex justify-center font-medium title-font mb-5">
              Create Team
            </h2>
            <div className="relative  mb-4">
              <label
                htmlFor="full-name"
                className="leading-7   text-2xl text-gray-400"
              >
                Team Name
              </label>
              <input
                onChange={handleChange}
                type="text"
                id="full-name"
                name="teamName"
                className="w-full h-[7vh]
                text-4xl bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-green-900 rounded border border-gray-600 focus:border-green-500  outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out
                "
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="teamSize"
                className="leading-7  text-2xl text-gray-400"
              >
                Team Size
              </label>

              <select
                onChange={handleChange}
                name="teamSize"
                className="w-full h-[7vh] bg-gray-600 text-white bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-green-900 rounded border border-gray-600 focus:border-green-500  outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-4xl mt-4"
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
      </section>
    </div>
  );
};

export default Create;
