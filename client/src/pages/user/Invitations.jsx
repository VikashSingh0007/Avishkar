import { useState } from "react";

const data = [
  {
    id: 1,
    team_name: "Marketing Team",
    set_by: "John Doe",
  },
  {
    id: 2,
    team_name: "Engineering Team",
    set_by: "Jane Smith",
  },
  {
    id: 3,
    team_name: "Sales Team",
    set_by: "Alex Johnson",
  },
];
const Invitations = () => {
  const [selectedteamId, setSelectedTeamId] = useState(null);

  const handleClick = (teamId, status) => {
    console.log(teamId, status);
    const teamdata = {
      teamId: teamId,
      status: status,
    };
    console.log("teamData", teamdata);
  };
  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4">
            Team Invitations
          </h1>
          {data.map((team1, index) => {
            return (
              <>
                <div className="flex justify-center text-center mb-4">
                  <div className="m-2 w-1/2">
                    <div className="h-full flex   items-center border-gray-800 border p-4 rounded-lg">
                      <div className="flex-grow">
                        <h2 className="text-white title-font font-medium">
                          {team1.team_name}
                        </h2>
                        <p className="text-gray-600">{team1.set_by}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                  <div className="p-2 sm:w-1/4 w-full">
                    <div className="bg-gray-800 hover:bg-green-800 rounded flex p-4 h-full items-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                        <path d="M22 4L12 14.01l-3-3" />
                      </svg>
                      <span
                        className="title-font font-medium text-white"
                        onClick={() => handleClick(team1.id, true)}
                      >
                        ACCEPT
                      </span>
                    </div>
                  </div>
                  <div className="p-2 sm:w-1/4 w-full">
                    <div className="bg-gray-800 hover:bg-red-500 rounded flex p-4 h-full items-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        className="text-red-400 w-6 h-6 flex-shrink-0 mr-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                        <path d="M22 4L12 14.01l-3-3" />
                      </svg>
                      <span
                        className="title-font font-medium text-white"
                        onClick={() => handleClick(team1.id, false)}
                      >
                        Reject
                      </span>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Invitations;
