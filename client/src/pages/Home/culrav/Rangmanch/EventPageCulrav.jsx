import { Link } from "react-router-dom"; // Import Link from React Router
import "../Components/EventCard.css";
import { useParams } from "react-router-dom";
// import data from "../../../../Data/Event/Culrav/Department";

const EventCard = ({ data }) => {
  // console.log(data.info[0]);
  // console.log(data)
  const { index } = useParams();
  return (
    <div className="h-full w-full relative ">
      {" "}
      {/* Wrap the card with Link */}
      <div
        className="card1 p-3 bg-[#63462D] "
        style={{ boxShadow: "0px 10px 10px black" }}
      >
        <Link
          to={`/page/${encodeURIComponent(JSON.stringify(data))}`}
          className="flex items-center justify-center cursor-pointer"
        >
          <div className="wrapper-card">
           
            <div className="flex justify-center items-center h-full">
              <div className="flex flex-col items-center">
                <img
                  className="cover-image"
                  src={data.BGImageLink}
                  alt="Event Cover"
                />
                <span className="flex text-center mx-auto text-3xl text-amber-100 font-custom hover:opacity-70 transition-opacity duration-300 ">
                  <div className="flex-col">
                    <p className="text-3xl w-full mt-2 text-white rumoura-font">
                      Explore !
                    </p>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
