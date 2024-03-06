import React, { useState } from "react";
import { createTeam } from "../../services/teamService";

const Create = () => {
  const dummyPayment = [
    {
      request: [
        {
          name: "Dummy1",
          paymentLink: "Url",
          college: "nvcbzxvbzx",
          contactNumber: "6348764378347",
          email: "hsdvjsnbvcbbnvcz",
        },
        {
          name: "Dummy2",
          paymentLink: "Url",
          college: "",
          contactNumber: "",
          email: "",
        },
        {
          name: "Dummy3",
          paymentLink: "Url",
          college: "",
          contactNumber: "",
          email: "",
        },
      ],
    },
  ];

  const handleAccept = () => {};
  const handleReject = () => {};
  
  return (
    <div className="bg-orange-200 mt-4 rounded-xl p-4">
      {dummyPayment.map((item, index) => (
        <div key={index} style={{ marginBottom: "16px" }}>
          {item.request.map((req, reqIndex) => (
            <div
              key={reqIndex}
              style={{ borderBottom: "1px solid black", marginBottom: "8px" }}
            >
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <div style={{ flex: "1", padding: "8px", textAlign: "left" }}>
                  <strong>Name:</strong> {req.name}
                </div>
                <div style={{ flex: "1", padding: "8px", textAlign: "left" }}>
                  <strong>College:</strong> {req.college}
                </div>
                <div style={{ flex: "1", padding: "8px", textAlign: "left" }}>
                  <strong>Contact Number:</strong> {req.contactNumber}
                </div>
                <div style={{ flex: "1", padding: "8px", textAlign: "left" }}>
                  <strong>Payment Link:</strong>{" "}
                  <a
                    href={req.paymentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {req.paymentLink}
                  </a>
                </div>
                <div style={{ flex: "1", padding: "8px", textAlign: "left" }}>
                  <strong>Email:</strong> {req.email}
                </div>
                <div style={{ flex: "1", padding: "8px", textAlign: "left" }}>
                  <button
                    onClick={handleAccept}
                    className="bg-green-600 m-2"
                    style={{
                      padding: "5px 10px",
                      borderRadius: "5px",
                      marginRight: "5px",

                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    Accept
                  </button>
                  <button
                    onClick={handleReject}
                    className="bg-red-600 m-2"
                    style={{
                      padding: "5px 10px",
                      borderRadius: "5px",

                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    Reject
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Create;
