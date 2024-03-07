import { useEffect, useState } from "react";
import { getAllParticipating, inviteTeam } from "../../services/teamService";

const Team = () => {
  const [email, setEmail] = useState("");
  const [fetchedData, setFetchedData] = useState();
  const handleSubmit = (teamId) => {
    const data = {
      teamId: teamId,
      email: email,
    };
    console.log(data);
    inviteTeam(data);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllParticipating();
        console.log("gotted from loki ", data);
        setFetchedData(data);
        console.log(typeof data.teams);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log("FetchedData", fetchedData);

  return (
    <>
      {fetchedData?.teams?.participating?.map((team, index) => (
        <div
          key={index}
          className="w-full mx-auto max-h-[80%] overflow-y-scroll md:w-[60%]  p-6 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900 rounded-lg shadow-md text-white"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 ">{team?.name}</h2>
          </div>
          <div className="mb-4">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Team Member's ID"
              className="w-full p-2 border rounded-md bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-orange-900 outline-none text-white"
            />
          </div>
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
            onClick={() => handleSubmit(team?._id)}
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
                style={{ boxShadow: "0 0 10px 0 rgba(255,255,255, 0.8)" }}
              >
                <div className="text-white text-xl font-medium mb-2">
                  {member.username}
                </div>
                <div className="text-orange-400">{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Team;
