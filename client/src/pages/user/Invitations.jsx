import { useEffect, useState } from "react";
import { getAllInvite, respondTeam } from "../../services/teamService";

const Invitations = () => {
  const [selectedteamId, setSelectedTeamId] = useState(null);
  const [invitation, setInvitation] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const d = await getAllInvite();
        setInvitation(d.teams?.invites);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleClick = (teamId, status) => {
    try {
      const teamdata = {
        teamId: teamId,
        status: status,
      };
      const res = respondTeam(teamdata).then((res) => {
        getAllInvite().then((d) => {
          setInvitation(d.teams?.invites);
        });
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <section
        className="text-gray-400 h-[100vh]  body-font"
        // style={{
        //   background:
        //     "linear-gradient(to bottom, #d95f3b, #f0984a, #fcd6a5, #7aa9a3, #338f9a, #1c4c70)",
        // }}
      >
        <div className="container px-5 py-24 mx-auto">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4">
            Team Invitations
          </h1>
          {invitation?.map((team, index) => {
            return (
              <>
                <div className="flex justify-center text-center mb-4">
                  <div className="m-2 w-1/2">
                    <div className="h-full flex   items-center border-gray-800 border p-4 rounded-lg">
                      <div className="flex-grow">
                        <h2 className="text-white title-font font-medium">
                          {team.name}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                  <div className="p-2 sm:w-1/4 w-full">
                    <div className="bg-gray-800 hover:bg-green-800 rounded flex p-4 h-full items-center cursor-pointer">
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
                        onClick={() => handleClick(team._id, true)}
                      >
                        ACCEPT
                      </span>
                    </div>
                  </div>
                  <div className="p-2 sm:w-1/4 w-full">
                    <div className="bg-gray-800 hover:bg-red-500 rounded flex p-4 h-full items-center cursor-pointer">
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
                        onClick={() => handleClick(team._id, false)}
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
