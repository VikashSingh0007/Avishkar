
const PopupModal = ({ closeModal, playAudio }) => {
  const handleYesClick = () => {
    playAudio();
    closeModal();
  };

  const handleNoClick = () => {
    closeModal();
  };

  return (
    <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-transparent z-40">
      <div className="text-lg bg-opacity-[0.5em] backdrop-filter backdrop-blur-lg bg-white w-[25em] h-[15em] rounded-2xl shadow-2xl flex flex-col justify-center items-center">
        Are you free to pick up the call for culrav ?
        <div className="flex flex-row mt-7 gap-5">
          <button
            className="w-[8em] bg-orange-300 hover:bg-orange-400 text-white font-semibold py-1 px-4 border border-orange-700 rounded focus:outline-none focus:shadow-outline-orange active:bg-orange-800"
            onClick={handleYesClick}
          >
            Yes, I'm free
          </button>
          <button
            className="w-[8em] bg-orange-300 hover:bg-orange-400 text-white font-semibold py-1 px-4 border border-orange-700 rounded focus:outline-none focus:shadow-outline-orange active:bg-orange-800"
            onClick={handleNoClick}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
