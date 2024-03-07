import  { useState } from "react";

const ResumeUploadContainer = () => {
  const [resumeLink, setResumeLink] = useState("");

  const handleUploadResume = () => {
    // Add your logic for handling the resume upload here
    console.log("Uploading Resume:", resumeLink);
  };

  return (
    <div className="w-[90%] md:w-[50%] mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Upload Resume</h2>
      <div className="mb-4">
        <label htmlFor="resumeLink" className="text-lg block font-semibold mb-2">
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
      <div className="text-gray-600 text-sm mb-4">Make sure it is public</div>
      <button
        className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
        onClick={handleUploadResume}
      >
        Upload Resume
      </button>
    </div>
  );
};

export default ResumeUploadContainer;
