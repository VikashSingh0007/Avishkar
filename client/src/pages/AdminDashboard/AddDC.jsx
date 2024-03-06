import { useState } from "react";
import { updateResume } from "../../services/authService";

const Resume = () => {
  const [data, setData] = useState({ email: "" });

  const handleChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      email: e.target.value,
    }));
  };

  const handleSubmit = () => {
    console.log(data);
    // Assuming the updateResume function returns a Promise
    updateResume(data).then((res) => {
      console.log(res);
      // Add any additional logic or feedback based on the response if needed
    });
  };

  return (
    <div className="mt-5 bg-gradient-to-br from-orange-200 via-orange-300 to-orange-400 p-8 rounded shadow-lg backdrop-filter backdrop-blur-md">
      <h2 className="text-2xl font-bold mb-4 text-black">
        Add Department Coordinator
      </h2>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Email of DC"
          className="w-full p-2 rounded bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring focus:border-blue-300"
          value={data.email}
          onChange={handleChange}
        />
      </div>
      <button
        className="bg-white text-orange-500 px-4 py-2 rounded hover:bg-orange-500 hover:text-white transition duration-300"
        onClick={handleSubmit}
      >
        Add
      </button>
    </div>
  );
};

export default Resume;
