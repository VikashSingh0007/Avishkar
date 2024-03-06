import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {getDepartmentalCoordies,removeDC} from "../../services/adminService"
const ViewDC = () => {
  
  const [data,setData]=useState([]);
  const [check,setCheck]=useState(false);
useEffect(()=>{
  const fetchTeams = async () => {
    try {
      const response = await getDepartmentalCoordies();
      setData(response)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  fetchTeams();
},[check])
  const removeDepartmentalCoordie = async (email) => {
    try {
      const response=await removeDC(email);
      console.log("rahul response",response);
      if(response) setCheck(!check)
    } catch (error) {
  
      console.log(error.message);
    }
  };
  return (
    <div className="bg-orange-200 mt-4 rounded-xl p-4">
      {data.length==0&&<><h1>No Departmental Coordinator Present</h1></>}
      {data.length>0&&data?.map((item, index) => (
        <div key={index} style={{ marginBottom: "16px" }}>
          <div
            key={index}
            style={{ borderBottom: "1px solid black", marginBottom: "8px" }}
          >
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <div style={{ flex: "1", padding: "8px", textAlign: "left" }}>
                <strong>Name:</strong> {item.name}
              </div>
              <div style={{ flex: "1", padding: "8px", textAlign: "left" }}>
                <strong>Department:</strong> {item.department}
              </div>
              <div style={{ flex: "1", padding: "8px", textAlign: "left" }}>
                <strong>Email:</strong> {item.email}
              </div>
              <div style={{ flex: "1", padding: "8px", textAlign: "left" }}>
                <strong>Mobile No.:</strong> {item.phone}
              </div>

              <div style={{ flex: "1", padding: "8px", textAlign: "left" }}>
                <button
                  onClick={() => {
                    {
                      removeDepartmentalCoordie(item.email);
                    }
                  }}
                  className="bg-red-600 m-2"
                  style={{
                    padding: "5px 10px",
                    borderRadius: "5px",
                    marginRight: "5px",

                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewDC;
