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
      <section
        className="text-gray-400 h-[100vh] bg-gray-900 body-font"
        style={{
          background:
            "linear-gradient(to bottom, #d95f3b, #f0984a, #fcd6a5, #7aa9a3, #338f9a, #1c4c70)",
        }}
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="flex justify-center m-4">
            <div className="rounded-2xl w-[50vw] xs:h-[47vh] sm:h-[57vh] overflow-auto border-black border-2 p-5 bg-gray-100 text-gray-800 ">
              <div className="h-full gap-[3rem] flex md:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <div className="flex-grow  sm:pl-8">
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
        </div>
      </section>
    </>
  );
};

export default View;
