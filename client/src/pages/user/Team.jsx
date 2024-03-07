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
    <div>
      <section
        className="text-gray-400   body-font"
        // style={{
        //   background:
        //     "linear-gradient(to bottom, #d95f3b, #f0984a, #fcd6a5, #7aa9a3, #338f9a, #1c4c70)",
        // }}
      >
        {fetchedData?.teams?.participating?.map((team, index) => {
          return (
            <>
              <div className="container px-5 py-24 mx-auto sm:w-[80vw]">
                <div className="flex flex-col text-center w-full mb-20">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                    {team?.name}
                  </h1>
                  <div className="flex flex-col items-center gap-4">
                    <input
                      className="rounded-lg text-black p-3 w-[30vw] xs:w-[16vw] md:w-[40vw] border-2 border-gray-300 focus:outline-none focus:border-blue-500"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter team member's email"
                    />
                    <button
                      className="flex justify-center px-8 py-2 border-2 border-gray-300 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                      onClick={() => handleSubmit(team._id)}
                    >
                      Add Team Member
                    </button>
                  </div>
                </div>
                <div className="flex justify-center">
                <h6 className="text-white text-xl font-medium mb-2">
                        Team Size : {team?.size}
                </h6>
                <p className="text-white text-xl font-medium mb-2">
                        Accepted Members : {team?.acceptedMembers?.length}
                </p>
                <p className="text-white text-xl font-medium mb-2">
                        Pending Invites : {team?.pendingMembers?.length}
                </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {team?.acceptedMembers.map((member, index) => (
                      <div
                        key={member._id}
                        className="bg-gray-800 p-4 rounded-lg"
                      >
                        <p className="text-white text-xl font-medium mb-2">
                          {member.username}
                        </p>
                        <p className="text-gray-400">{member.role}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </div>
  );
};

export default Team;
