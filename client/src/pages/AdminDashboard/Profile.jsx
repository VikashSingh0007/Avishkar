import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getProfile } from "../../services/teamService";

const View = () => {
  const [fetchedData, setFetchedData] = useState({
    name: "NAME",
    username: "USERNAME",
    email: "EMAIL@NCNNC.COM",
    resumeLink: "HTTP://XNSBCNBCNX.COM",
    mobileNo: "735764765",
    gender: "MALE",
    collegeName: "MNNIT",
  });
  const history = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const d = await getProfile();
      
        if (d.success) {
          setFetchedData(d.profile.data);
        }
      } catch (error) {
        // history("/login");
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="text-gray-400 body-font h-full flex justify-center items-center">
        <div className="flex flex-col font-semibold text-xl text-black bg-orange-200 p-5 gap-5 rounded-xl">
          <div>Name: {fetchedData.name}</div>
          <div>UserName: {fetchedData.username}</div>
          <div>Email: {fetchedData.email}</div>
        </div>
      </div>
    </>
  );
};

export default View;
