import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../../services/teamService";
import services from "./services/adminServices";
import { getAllParticipating } from "../../services/teamService";
import { downloadExcelEventFile, getTeamParticipatingInEvent } from "../../services/adminService";
import axios from 'axios'
const View = ({ event }) => {
  const [openTeamIndex, setOpenTeamIndex] = useState(null);
  const [teams, setTeams] = useState([])

  // console.log("events ",event)
  useEffect(()=>{
    const fetchTeams = async () => {
      try {
        const d = await getTeamParticipatingInEvent(event);
        console.log("D",d)
        if (d.success) {
          setTeams(d.data);
        }
      } catch (error) {
        // history("/login");
        console.error("Error fetching data:", error);
      }
    };
    fetchTeams();
  },[event])

  
  const toggleDropdown = (index) => {
    setOpenTeamIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const handleDownload = async () => {
    downloadExcelEventFile(event)
  }
  console.log("teams",teams)
  

  return (
    <div className="lg:w-[80%] w-full overflow-y-scroll">
      <div>
        {" "}
        <h2 className="text-2xl font-bold mb-4 flex justify-center items">
          Participating Teams
        </h2>
        <button onClick={handleDownload}>
          Download Sheet
        </button>
      </div>

      {teams.map((team, index) => (
        <div key={index} className="mb-4">
          <div
            className="flex justify-between items-center bg-orange-300 p-3 rounded cursor-pointer hover:bg-orange-400"
            onClick={() => toggleDropdown(index)}
          >
            <div>{team?.name}</div>
            <div>{openTeamIndex === index ? "▲" : "▼"}</div>
          </div>
          {/* Dropdown content */}
          <div className={`mt-2 ${openTeamIndex === index ? "" : "hidden"} flex flex-wrap gap-2`}>
            {team.acceptedMembers.map((participant, participantIndex) => (
              <div
                key={participantIndex}
                className="bg-gray-200 p-2 mb-1 rounded"
              >
                <div>Name: {participant.name}</div>
                <div>Email: {participant.email}</div>
                <div>Mobile No: {participant.phone}</div>
              </div>
            ))} 
          </div>
        </div>
      ))}
    </div>
  );
};

export default View;
