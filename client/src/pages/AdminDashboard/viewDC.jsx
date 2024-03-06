import React, { useEffect, useState } from "react";

import { toast } from "react-toastify";

const ViewDC = () => {
  const fetchedData = [
    {
      name: "NAME",
      phone: "Phone",
      email: "Email",
      department: "Department",
    },
    {
      name: "NAME",
      phone: "Phone",
      email: "Email",
      department: "Department",
    },
  ];

  const removeResponse = () => {};
  return (
    <div className="bg-orange-200 mt-4 rounded-xl p-4">
      {fetchedData?.map((item, index) => (
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
                      removeResponse(item.email, true);
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
