import { useState } from "react";

const ResumeUploadContainer = () => {
  const [resumeLink, setResumeLink] = useState("");

  const handleUploadResume = () => {
    // Add your logic for handling the resume upload here
    console.log("Uploading Resume:", resumeLink);
  };

  return (
    <div
      className="w-[90%] md:w-[50%] mx-auto p-6  bg-gradient-to-b from-[#63462D] rounded-lg shadow-md"
      style={{
        boxShadow: "0px 10px 10px black",
      }}
    >
      <h2 className="lg:text-[3em] md:text-[2em] text-[1.5em] text-white font-bold mb-4">
        Upload Resume
      </h2>
      <div className="mb-4">
        <label
          htmlFor="resumeLink"
          className="lg:text-[1.5em] md:text-[1em] text-white block font-semibold mb-2"
        >
          Resume Drive Link
        </label>
        <input
          type="text"
          id="resumeLink"
          name="resumeLink"
          value={resumeLink}
          onChange={(e) => setResumeLink(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div
        className="text-gray-200 text-sm mb-4
      lg:text-[1.2em] md:text-[1em] text-[0.5em]"
      >
        Make sure it is public
      </div>
      <button
        className="lg:text-[1.8em] md:text-[1.2em] text-[0.8em] bg-[#63462D] text-white px-4 py-2 rounded-md hover:bg-[#423C31]"
        onClick={handleUploadResume}
        style={{
        boxShadow: "0px 5px 5px black",
      }}
      >
        Upload Resume
      </button>
    </div>
  );
};

export default ResumeUploadContainer;
