import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../../services/teamService";
import services from "./services/adminServices";

const View = ({ event }) => {
  const [openTeamIndex, setOpenTeamIndex] = useState(null);
  const [teams, setTeam] = useState([
    {
      teamName: "Team Name",
      participants: [
        { name: "Name", email: "Email", mobileNo: "Mobile No" },
        { name: "Name", email: "Email", mobileNo: "Mobile No" },
        { name: "Name", email: "Email", mobileNo: "Mobile No" },
        { name: "Name", email: "Email", mobileNo: "Mobile No" },
      ],
    },
    {
      teamName: "Team Name",
      participants: [
        { name: "Name", email: "Email", mobileNo: "Mobile No" },
        { name: "Name", email: "Email", mobileNo: "Mobile No" },
        { name: "Name", email: "Email", mobileNo: "Mobile No" },
        { name: "Name", email: "Email", mobileNo: "Mobile No" },
      ],
    },
    {
      teamName: "Team Name",
      participants: [
        { name: "Name", email: "Email", mobileNo: "Mobile No" },
        { name: "Name", email: "Email", mobileNo: "Mobile No" },
        { name: "Name", email: "Email", mobileNo: "Mobile No" },
        { name: "Name", email: "Email", mobileNo: "Mobile No" },
      ],
    },
  ]);

  const navigate = useNavigate();

  const toggleDropdown = (index) => {
    setOpenTeamIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    const getParticipants = async () => {
      try {
        const Token = localStorage.getItem('userToken');
        const response = await services.getParticipationList(Token,event);
        if (response.success) {
          setTeam(response.participation);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        navigate("/login");
      }
      getParticipants();
    };
    getParticipants();
  }, []);

  return (
    <div className="lg:w-[80%] w-full overflow-y-scroll">
      <div>
        {" "}
        <h2 className="text-2xl font-bold mb-4 flex justify-center items">
          Participating Teams
        </h2>
      </div>

      {teams.map((team, index) => (
        <div key={index} className="mb-4">
          <div
            className="flex justify-between items-center bg-blue-200 p-3 rounded cursor-pointer hover:bg-blue-300"
            onClick={() => toggleDropdown(index)}
          >
            <div>{team.teamName}</div>
            <div>{openTeamIndex === index ? "▲" : "▼"}</div>
          </div>
          {/* Dropdown content */}
          <div className={`mt-2 ${openTeamIndex === index ? "" : "hidden"} flex flex-wrap gap-2`}>
            {team.participants.map((participant, participantIndex) => (
              <div
                key={participantIndex}
                className="bg-gray-200 p-2 mb-1 rounded"
              >
                <div>Name: {participant.name}</div>
                <div>Email: {participant.email}</div>
                <div>Mobile No: {participant.mobileNo}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default View;
