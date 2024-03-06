import { registerEvent } from "../../../../services/teamService";

const Modal = ({ teams, setShowModal, event }) => {
  const handleRegister = (teamId) => {
    const data = {
      eventName: event,
      teamId: teamId,
    };
    registerEvent(data);
    console.log(data);
  };
  return (
    <div
      className="z-5 w-full  h-screen sm:h-[90vh] overflow-y-auto "
      style={{
        opacity: 0.9,
        backdropFilter: "blur(10px)", // Adjust the blur value as needed
        backgroundColor: "rgba(255, 255, 255, 0.3)",
      }}
    >
      <div className="flex justify-center item-center">
        <div className="flex justify-between p-4 ml-10 mr-10  w-full md:w-[40vw]  bg-gradient-to-b from-[#d95f3b] via-[#f0984a] to-[#fcd6a5] sm:from-[#7aa9a3] sm:via-[#338f9a] sm:to-[#1c4c70]">
          <h1 className="text-3xl font-bold text-white">Teams</h1>
          <button
            onClick={() => setShowModal(false)}
            className="text-3xl font-bold text-white"
          >
            Close
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-center  content-center p-4  w-full">
        {teams?.map((team, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-center  content-cente sm:flex-row gap-4 p-4"
            >
              <div className="flex justify-between items-center p-4 w-full md:w-[40vw] bg-slate-100 rounded-lg">
                <h1 className="font-bold text-black">{team.name}</h1>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                  onClick={() => handleRegister(team._id)}
                >
                  Register
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Modal;
