import React, { useEffect, useState } from "react";
import {getFeeNotPaid, verifyPayment} from "../../services/adminService"
import {toast} from "react-toastify"

const Create = () => {

  const [fetchedData , setFetchedData ] = useState([]);
  // console.log(fetchedData)
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


  
  return (<>
   <div className="bg-orange-200 mt-4 rounded-xl p-4">
    {fetchedData.length==0&&<><h1>No User has registered</h1></>}
      {fetchedData.length>0&&fetchedData.map((item, index) => (
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
                  <strong>College:</strong> {item.college}
                </div>
                <div style={{ flex: "1", padding: "8px", textAlign: "left" }}>
                  <strong>Contact Number:</strong> {item.phone}
                </div>
                <div style={{ flex: "1", padding: "8px", textAlign: "left" }}>
                  <strong>Payment Link:</strong>{" "}
                  <a
                    href={item.paymentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.paymentLink}
                  </a>
                </div>
                <div style={{ flex: "1", padding: "8px", textAlign: "left" }}>
                  <strong>Resume:</strong>{" "}
                  <a
                    href={item.paymentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.resumeLink}
                  </a>
                </div>
                <div style={{ flex: "1", padding: "8px", textAlign: "left" }}>
                  <strong>Email:</strong> {item.email}
                </div>
                <div style={{ flex: "1", padding: "8px", textAlign: "left" }}>
                  <button
                    onClick={()=>{{ handleResponse(item.email,true) }}}
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
                    onClick={()=>{{ handleResponse(item.email,false) }}}
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
          
        </div>
      ))}  
    </div>
  </>
   
  );
};

export default Create;
