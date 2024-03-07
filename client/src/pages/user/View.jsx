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
        console.log(d.success);
        if (d.success) {
          setFetchedData(d.profile.data);
        }
      } catch (error) {
        history("/login");
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="flex items-center justify-center h-auto w-[90%] ">
        <div className="  bg-gradient-to-b from-gray-600 via-gray-700 to-gray-900 rounded-lg p-8 shadow-md text-center text-white">
          <h2 className="text-[3em] font-bold text-orange-500 mb-3">John Doe</h2>
          <div className="text-gray-200 mb-2 text-xl">Email: john.doe@example.com</div>
          <div className="text-gray-200 text-xl">Phone: +1 123-456-7890</div>
        </div>
      </div>
    </>
  );
};

export default View;
