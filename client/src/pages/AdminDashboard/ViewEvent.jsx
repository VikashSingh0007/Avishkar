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
      <section className="text-gray-400 body-font">
        <div className="flex justify-center m-4">
          <div className="rounded-2xl  mt-20 w-full md:w-[40vw] xs:h-[30vh] sm:h-[30vh] overflow-auto border-black border-2 p-5 bg-gray-100 text-gray-800">
            <div className="h-full gap-[3rem] flex flex-col items-center sm:justify-start text-center sm:text-left">
              <div className="flex-grow sm:pl-4">
                <h2 className="title-font font-medium p-4 text-2xl ">
                  Name : {fetchedData.name}
                </h2>
                <h3 className="text-gray-500 p-4 text-2xl mb-3">
                  Username : {fetchedData.username}
                </h3>
                <h2 className="title-font p-4 font-medium text-2xl ">
                  Email : {fetchedData.email}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default View;
