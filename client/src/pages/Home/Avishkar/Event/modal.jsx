const Modal = ({ teams, setShowModal, event }) => {
  const handleRegister = (teamId) => {
    const data = {
      event: event,
      teamId: teamId,
    };
    console.log(data);
  };
  return (
    <div
      className="z-5 w-[45vw] h-[90vh] "
      style={{
        opacity: 0.9,
        backdropFilter: "blur(10px)", // Adjust the blur value as needed
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        // backgroundImage:
        //   "linear-gradient(to bottom, #d95f3b, #f0984a, #fcd6a5, #7aa9a3, #338f9a, #1c4c70)",
      }}
    >
      <div
        className="flex justify-between p-4"
        style={{
          opacity: 0.7,
          backgroundImage:
            "linear-gradient(to bottom, #d95f3b, #f0984a, #fcd6a5, #7aa9a3, #338f9a, #1c4c70)",
        }}
      >
        <h1 className="text-3xl font-bold">Teams</h1>
        <button
          onClick={() => setShowModal(false)}
          className="text-3xl font-bold"
        >
          close
        </button>
      </div>
      <div className="flex flex-col p-4 space-y-4">
        {teams?.map((team, index) => {
          return (
            <div key={index} className="flex gap-[4vw] p-4">
              <div
                key={index}
                className="flex justify-between p-4 w-[40vw] bg-slate-400"
              >
                <h1>{team.name}</h1>
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                onClick={() => handleRegister(team._id)}
              >
                Register
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Modal;
