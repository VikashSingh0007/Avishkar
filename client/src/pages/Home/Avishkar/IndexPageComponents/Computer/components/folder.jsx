
const Folder = ({icon,title,handleDoubleClick,currScreen,selectedFolder}) => {

  return (
    <div
      className={`flex m-[10%] w-[70%] flex-col justify-center items-center hover: ${
        selectedFolder===title ? "bg-blue-200" : ""
      } hover:bg-blue-500`}
      onDoubleClick={handleDoubleClick}
      onClick={handleDoubleClick}
    >
        <div className="flex justify-center items-center">
            {icon}
        </div>
        <div className={`text-[0.9vw] font-bold w-full flex justify-center text-center ${currScreen==="desktop"? "text-slate-200":"text-black"}`}>
          {title}
        </div>
      </div>
  );
};

export default Folder;
