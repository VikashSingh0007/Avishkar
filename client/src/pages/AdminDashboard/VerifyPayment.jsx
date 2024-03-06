import React, { useEffect, useState } from "react";
import {getFeeNotPaid, verifyPayment} from "../../services/adminService"
import {toast} from "react-toastify"

const Create = () => {
  const [fetchedData , setFetchedData ] = useState(null);
  console.log(fetchedData)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getFeeNotPaid();
        console.log("gotted from loki ", res);
        setFetchedData(res.data);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleResponse = async (email , status) => {
     try{
      const fetchData = async () => {
        try {
          const response = await getFeeNotPaid();
          
          setFetchedData(response.data);
          
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
     
        const messageData = {
          email : email,
          status : status
        }
        const res = await verifyPayment(messageData);
        
        if(res){
          fetchData();
        }
        else{
          toast.error("could not delete");
        }
     }
     catch(error){
      console.error("Error fetching data:", error);
     }
  }
  
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
            {fetchedData?.map((item, index) => (
              <React.Fragment key={index}>
                  <tr
                    key={item._id}
                    style={{ borderBottom: "1px solid black" }}
                  >
                    <td style={{ padding: "8px", textAlign: "left" }}>
                      {item.name}
                    </td>
                    <td style={{ padding: "8px", textAlign: "left" }}>
                      {item.college}
                    </td>
                    <td style={{ padding: "8px", textAlign: "left" }}>
                      {item.phone}
                    </td>
                    <td style={{ padding: "8px", textAlign: "left" }}>
                      <a
                        href={item.paymentLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.paymentLink}
                      </a>
                    </td>

                    <td style={{ padding: "8px", textAlign: "left" }}>
                      {item.email}
                    </td>
                    <td style={{ padding: "8px", textAlign: "left" }}>
                      <button
                        onClick={() => { handleResponse(item.email,true) }}
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
                        onClick={() => { handleResponse(item.email,false) }}
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
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Create;
