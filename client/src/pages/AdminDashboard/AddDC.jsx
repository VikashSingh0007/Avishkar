import React, { useState } from "react";

import { makeDc } from "../../services/adminService";
import { toast } from "react-toastify";

const Resume = () => {
  const [data, setData] = useState({ email: "" });
   const departments=["Cyberquest","Electromania","Powersurge","Mechrocosm","Rasayans","Nirmaan","Genesis","Oligopoly","Monopoly","Gnosiomania","Robomania","Cosmocon","Aerodynamix","Rungmunch","Annunaad","Litmuse","Darkroom","Rangsazzi","Razzmatazz","Footprints"]
  const handleChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      email: e.target.value,
    }));
  };
const [selectDepartment,handleDepartment]=useState(null)
  const handleSubmit = async () => {
    console.log(data);
    const requestData={
      email:data.email,
      department:selectDepartment
    }
    
    await makeDc(requestData);
  };

  return (
    <div className="mt-5 bg-gradient-to-br from-orange-200 via-orange-300 to-orange-400 p-8 rounded shadow-lg backdrop-filter backdrop-blur-md">
      <h2 className="text-2xl font-bold mb-4 text-black">
        Add Department Coordinator
      </h2>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Enter E-mail of Departmental Coordinator"
          className="w-full p-2 rounded bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring focus:border-blue-300"
          value={data.email}
          onChange={handleChange}
        />
      </div>
      <select
        value={selectDepartment}
        onChange={(e) => handleDepartment(e.target.value)}
        style={{
          padding: '5px',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      >
        <option value="">Select Department</option>
        {departments.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <br />
      <br />
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
