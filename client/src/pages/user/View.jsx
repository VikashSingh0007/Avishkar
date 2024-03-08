import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getProfile } from "../../services/teamService";
import { toast } from "react-toastify";
import Loader from "../Home/loader";
const View = () => {
  const [fetchedData, setFetchedData] = useState({
    name: "NAME",
    username: "USERNAME",
    email: "EMAIL@NCNNC.COM",
    resumeLink: "HTTP://XNSBCNBCNX.COM",
    phone: "735764765",
    gender: "MALE",
    collegeName: "MNNIT",
  });
  const history = useNavigate();
  const [isloading,setLoading]=useState(false); 
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const d = await getProfile();
        console.log(d.success);
        if (d.success) {
          if(!d.profile.resumeLink){
            toast.info("Please Upload Resume Link")
          }
          setFetchedData(d.profile.data);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false)
        history("/login");
        console.error("Error fetching data:", error);
        
      }
    };

    fetchData();
  }, []);
  console.log(fetchedData);
  return (
    <>
      {isloading && <Loader/>}
      <div className="flex justify-center  w-[90%]  h-screen overflow-y-scroll ">
        <div
          className="  bg-gradient-to-b from-[#63462D] rounded-lg p-8 shadow-md text-center text-white"
          style={{
            boxShadow: "0px 10px 10px black",
          }}
        >
          <h2 className="lg:text-[3em] md:text-[2em] text-[1.5em]  font-bold text-white mb-3">
            {fetchedData.name}
          </h2>
          <h2 className="lg:text-[2em] md:text-[1.5em] text-[1em] font-bold text-white mb-3">
            UserId - {fetchedData.username}
          </h2>
          <div className="text-gray-200 mb-2 lg:text-[1.8em] md:text-[1.5em] text-[0.8em]">
            Email: {fetchedData.email}
          </div>
          <div className="text-gray-200 lg:text-[1.8em] md:text-[1.5em] text-[0.8em]">
            Phone: {fetchedData.phone}
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
