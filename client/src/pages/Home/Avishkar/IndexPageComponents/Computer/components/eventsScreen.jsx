import Folder from "./folder";
import { useNavigate } from "react-router-dom";

const EventsScreen = () => {
  const folder = (
    <svg
      className="w-[50%]  text-yellow-600 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M4 4a2 2 0 0 0-2 2v12.6l3-8a1 1 0 0 1 1-.6h12V9a2 2 0 0 0-2-2h-4.5l-2-2.3A2 2 0 0 0 8 4H4Zm2.7 8h-.2l-3 8H18l3-8H6.7Z"
        clipRule="evenodd"
      />
    </svg>
  );

  const events = [
    { id: 1, title: "CyberQuest", icon: folder },
    { id: 2, title: "Electromania", icon: folder },
    { id: 3, title: "Kredomania", icon: folder },
    { id: 4, title: "Rasayans", icon: folder },
    { id: 5, title: "Robomania", icon: folder },
    { id: 6, title: "Nirman", icon: folder },
    { id: 7, title: "Genesis", icon: folder },
    { id: 8, title: "Mechrocosm", icon: folder },
    { id: 9, title: "Gnosiomania", icon: folder },
    { id: 10, title: "Monopoly", icon: folder },
    { id: 11, title: "PowerSurge", icon: folder },
    { id: 12, title: "Oligopoly", icon: folder },
    { id: 13, title: "Aerodynamics", icon: folder },
  ];

  events.map((event) => {
    console.log(event.title);
  });

  const navigate = useNavigate();

  const navigatePage = (title) => {
    // e.preventDefault();
    // e.stopPropagation();
    navigate(`/avishkar-landing/${title}`);
    console.log(title);
  };

  return (
    <div className="grid bg-rose-400 z-10">
      <div className="absolute top-[10%] flex flex-wrap">
        {events.map((event) => {
          return (
            <div
              key={event.id}
              className="h-[20%] w-[20%]"
              onClick={() => navigatePage(event.title)}
            >
              <Folder icon={folder} title={event.title} currScreen="events" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventsScreen;
