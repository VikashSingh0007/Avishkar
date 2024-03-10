import { useEffect, useState } from "react";
import { getAllParticipating, inviteTeam } from "../../services/teamService";
import Loader from "../Home/loader.jsx";
const Team = () => {
  const [email, setEmail] = useState("");
  const [fetchedData, setFetchedData] = useState();
  const [isloading, setLoading] = useState(false);
  const handleSubmit = async (teamId) => {
    try {
      const data = {
        teamId: teamId,
        email: email,
      };
      setLoading(true);
      console.log(data);
      await inviteTeam(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getAllParticipating();
        console.log("gotted from loki ", data);
        setFetchedData(data);
        setLoading(false);
        console.log(typeof data.teams);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  console.log("FetchedData", fetchedData);

  return (
    <div className="flex flex-wrap overflow-y-scroll p-5 gap-[10%]">
      {isloading && <Loader />}
      {fetchedData?.teams?.participating?.map((team, index) => (
        <div
          key={index}
          className="w-full flex flex-col  mx-auto  md:w-[60%]  p-6 bg-gradient-to-b from-[#63462D]  rounded-lg shadow-md text-white"
          style={{
            boxShadow: "0px 10px 10px black",
          }}
        >
          <div className="text-center">
            <h2 className="lg:text-[3em] md:text-[2em] text-[1.5em] font-bold mb-4 ">
              {team?.name}
            </h2>
          </div>
          <div className="mb-4">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Team Member's Email Id"
              className="w-full p-2 lg:text-[1.3em] md:text-[1em] text-[0.8em] border rounded-md bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-[#423C31] outline-none text-white"
            />
          </div>
          <button
            className="[bg-[#63462D] text-white lg:text-[1.5em] md:text-[1em] text-[0.8em] px-4 py-2 rounded-md hover:bg-[#423C31]"
            onClick={() => handleSubmit(team?._id)}
            style={{
              boxShadow: "0px 5px 5px black",
            }}
          >
            Add Team Member
          </button>
          <div className="mt-10 flex flex-wrap gap-4">
            <h6 className="text-white rounded-lg p-2 text-xl font-medium mb-2 bg-orange-900 bg-opacity-20 shadow-lg backdrop-filter backdrop-blur-md">
              Team Size : {team?.size}
            </h6>
            <h6 className="text-white rounded-lg p-2 text-xl font-medium mb-2 bg-orange-900 bg-opacity-20 shadow-lg backdrop-filter backdrop-blur-md">
              Accepted Members : {team?.acceptedMembers?.length}
            </h6>
            <h6 className="text-white rounded-lg p-2 text-xl font-medium mb-2 bg-orange-900 bg-opacity-20 shadow-lg backdrop-filter backdrop-blur-md">
              Pending Invites : {team?.pendingMembers?.length}
            </h6>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            {team?.acceptedMembers.map((member, index) => (
              <div
                key={index}
                className="bg-orange-500 p-4 rounded-lg ring-2  backdrop-filter backdrop-blur-md bg-opacity-20 relative z-10"
                style={{ boxShadow: "0 2px 5px 0 black" }}
              >
                <div className="text-white lg:text-[1.3em] md:text-[1em] text-[0.8em] font-medium mb-2">
                  {member.name}
                </div>

                <div className="text-[#423C31] font-bold lg:text-[1em] md:text-[0.8em] text-[0.5em]">
                  {member.username}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap w-full">
            {team?.participatingEvents?.map((event)=>{
              return(
              event!==null &&
              
                <div
                key={index}
                className="bg-orange-500 p-4 rounded-lg ring-2  backdrop-filter backdrop-blur-md bg-opacity-20 relative z-10"
                style={{ boxShadow: "0 2px 5px 0 black" }}
              >
                <div className="text-white  lg:text-[1.5em] md:text-[1.2em] text-[0.8em]">
                  {event}
                </div>
              </div>
              )
            })}</div>
        </div>
      ))}
    </div>
  );
};

export default Team;
