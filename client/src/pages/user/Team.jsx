import { useEffect } from "react";
import { getAllParticipating } from "../../services/teamService";
const data = [
  {
    teamName: "Team A",
    teamMembers: [
      {
        name: "John Doe",
        role: "Software Engineer",
      },
      {
        name: "Jane Smith",
        role: "UI/UX Designer",
      },
      {
        name: "Alice Johnson",
        role: "Project Manager",
      },
    ],
  },
  {
    teamName: "Team B",
    teamMembers: [
      {
        name: "Michael Brown",
        role: "Data Analyst",
      },
      {
        name: "Sarah Clark",
        role: "Software Developer",
      },
      {
        name: "David Lee",
        role: "Quality Assurance",
      },
    ],
  },
  {
    teamName: "Team C",
    teamMembers: [
      {
        name: "Emily Wilson",
        role: "Product Manager",
      },
      {
        name: "Ryan Martinez",
        role: "Frontend Developer",
      },
      {
        name: "Olivia Garcia",
        role: "Backend Developer",
      },
    ],
  },
];
const Team = () => {
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
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                    {team.teamName}
                  </h1>
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
                                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                src="https://dummyimage.com/80x80"
                              />
                              <div className="flex-grow">
                                <h2 className="text-white title-font font-medium">
                                  {member.name}
                                </h2>
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
