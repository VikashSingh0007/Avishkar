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
    });
  };
  return (
    <div>
      <section className="text-gray-400 body-font">
        <div className="flex justify-center">
          <div className="rounded-lg mt-20 w-full md:w-[40vw] xs:h-[30vh] sm:h-[30vh] bg-white shadow-md p-8">
            <h2 className="text-gray-800 text-4xl font-medium text-center mb-8">
              Upload Resume
            </h2>
            <div className="relative mb-2">
              <label htmlFor="resume-link" className="text-gray-600 text-2xl">
                Resume Drive Link
              </label>
              <input
                onChange={handleChange}
                type="text"
                id="resume-link"
                name="resumeLink"
                className="w-full h-12 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-green-900 rounded border border-gray-300 focus:border-green-500 outline-none text-gray-800 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <h6 className="text-gray-600 mb-8 text-lg">
              Make sure it is public
            </h6>
            <button
              className="text-white text-3xl bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded w-full"
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
