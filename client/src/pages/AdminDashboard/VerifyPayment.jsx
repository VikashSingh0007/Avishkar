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
          contactNumber: "6348764378347dhsjgd",
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
  return (
    <div>
      <div>
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid black" }}>
              <th style={{ padding: "8px", textAlign: "left" }}>Name</th>
              <th style={{ padding: "8px", textAlign: "left" }}>College</th>
              <th style={{ padding: "8px", textAlign: "left" }}>
                Contact Number
              </th>
              <th style={{ padding: "8px", textAlign: "left" }}>
                Payment Link
              </th>
              <th style={{ padding: "8px", textAlign: "left" }}>Email</th>
              <th style={{ padding: "8px", textAlign: "left" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {dummyPayment.map((item, index) => (
              <React.Fragment key={index}>
                {item.request.map((req, reqIndex) => (
                  <tr
                    key={reqIndex}
                    style={{ borderBottom: "1px solid black" }}
                  >
                    <td style={{ padding: "8px", textAlign: "left" }}>
                      {req.name}
                    </td>
                    <td style={{ padding: "8px", textAlign: "left" }}>
                      {req.college}
                    </td>
                    <td style={{ padding: "8px", textAlign: "left" }}>
                      {req.contactNumber}
                    </td>
                    <td style={{ padding: "8px", textAlign: "left" }}>
                      <a
                        href={req.paymentLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {req.paymentLink}
                      </a>
                    </td>

                    <td style={{ padding: "8px", textAlign: "left" }}>
                      {req.email}
                    </td>
                    <td style={{ padding: "8px", textAlign: "left" }}>
                      <button
                        onClick={() => window.open(req.paymentLink, "_blank")}
                        style={{
                          padding: "5px 10px",
                          borderRadius: "5px",
                          marginRight: "5px",
                          backgroundColor: "green",
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => console.log("Reject")}
                        style={{
                          padding: "5px 10px",
                          borderRadius: "5px",
                          backgroundColor: "red",
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Create;
