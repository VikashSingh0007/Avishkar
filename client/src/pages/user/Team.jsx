import { useEffect, useState } from "react";
import { getAllParticipating } from "../../services/teamService";
const data = [
  {
    id: 1,
    teamName: "Team A",
    teamMembers: [
      {
        id: 1,
        name: "John Doe",
        role: "Software Engineer",
      },
      {
        id: 2,
        name: "Jane Smith",
        role: "UI/UX Designer",
      },
      {
        id: 3,
        name: "Alice Johnson",
        role: "Project Manager",
      },
    ],
  },
  {
    id: 2,
    teamName: "Team B",
    teamMembers: [
      {
        id: 4,
        name: "Michael Brown",
        role: "Data Analyst",
      },
      {
        id: 5,
        name: "Sarah Clark",
        role: "Software Developer",
      },
      {
        id: 6,
        name: "David Lee",
        role: "Quality Assurance",
      },
    ],
  },
  {
    id: 3,
    teamName: "Team C",
    teamMembers: [
      {
        id: 1,
        name: "Emily Wilson",
        role: "Product Manager",
      },
      {
        id: 2,
        name: "Ryan Martinez",
        role: "Frontend Developer",
      },
      {
        id: 3,
        name: "Olivia Garcia",
        role: "Backend Developer",
      },
    ],
  },
];
const Team = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (teamId) => {
    const data = {
      teamId: teamId,
      email: email,
    };
    console.log(data);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllParticipating();
        console.log("gotted from loki ", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font">
        {data.map((team, index) => {
          return (
            <>
              <div className="container px-5 py-24 mx-auto sm:w-[80vw]">
                <div className="flex flex-col text-center w-full mb-20">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                    {team.teamName}
                  </h1>
                  <div className="flex justify-center gap-5">
                    <input
                      className="rounded-lg text-black p-3 w-[30vw] xs:w-[16vw] md:w-[40vw]"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                      className="flex justify-center px-10 py-2 border-4 w-[3vw] border-solid text-black border-black bg-slate-500 rounded-xl hover:bg-sky-700 "
                      onClick={() => handleSubmit(team.id)}
                    >
                      add
                    </button>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="flex flex-col md:flex-row  text-4xl justify-center">
                    {team.teamMembers.map((member, index) => {
                      return (
                        <>
                          <div className="m-2">
                            <div className="h-full flex   items-center border-gray-800 border p-4 rounded-lg">
                              <img
                                alt="team"
                                className="w-[10vw] h-[17vh] bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                src="https://dummyimage.com/80x80"
                              />
                              <div className="flex-grow text-wrap">
                                <p className="text-white title-font font-medium ">
                                  {member.name}
                                </p>
                                <p className="text-gray-600">{member.role}</p>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
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
