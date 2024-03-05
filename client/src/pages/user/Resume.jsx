import React, { useState } from "react";
import { updateResume } from "../../services/authService";

const Resume = () => {
  const [data, setData] = useState();
  function handleChange(e) {
    setData((old) => {
      return {
        ...old,
        resumeLink: e.target.value,
      };
    });
    console.log(data);
  }

  const handleSubmit = () => {
    console.log(data);
    updateResume(data).then((res) => {
      console.log(res);
    })
  };
  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className=" px-5 py-24  flex justify-center ">
          <div className=" md:w-1/4 flex  flex-col justify-center h-[70vh] bg-gray-800 bg-opacity-50 rounded-lg p-8  w-full mt-10 md:mt-0">
            <h2 className="text-white text-4xl flex justify-center font-medium title-font mb-5">
              Resume Team
            </h2>
            <div className="relative  mb-4">
              <label
                htmlFor="full-name"
                className="leading-7   text-2xl text-gray-400"
              >
                Resume Drive Link
              </label>
              <input
                onChange={handleChange}
                type="text"
                id="full-name"
                name="resumeLink"
                className="w-full h-[7vh]
                text-4xl bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-green-900 rounded border border-gray-600 focus:border-green-500  outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out
                "
              />
            </div>
            Make Sure it is public
            <button
              className="text-white text-4xl bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded "
              onClick={() => handleSubmit()}
            >
              Upload Resume
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
