import { AiOutlineUserAdd } from "react-icons/ai";
import { BiHelpCircle, BiSolidSpreadsheet } from "react-icons/bi";
import { PiStepsFill } from "react-icons/pi";
import { PiConfettiFill } from "react-icons/pi";
import { GiTeacher, GiChart, GiPencil } from "react-icons/gi";
import { FaBook } from "react-icons/fa";

export const links = [
  {
    title: "Culrav",
    links: [
      // {
      //   name: "Department",
      //   link: "CulravDepartment",
      //   icon: <PiStepsFill />,
      // },
      {
        name: "Department Coordinator",
        link: "CulravDC",
        icon: <PiStepsFill />,
      },
      {
        name: "Schedule",
        link: "CulravSchedule",
        icon: <FaBook />,
      },
      {
        name: "CulravEvent",
        link: "CulravEvent",
        icon: <GiPencil />,
      },
      // {
      //   name: "Participant",
      //   link: "CulravParticipant",
      //   icon: <GiChart />,
      // },
      {
        name: "Sponsors",
        link: "CulravSponsors",
        icon: <PiConfettiFill />,
      },
    ],
  },

  {
    title: "Avishkar",
    links: [
      // {
      //   name: "Department",
      //   link: "AvishkarDepartment",
      //   icon: <PiStepsFill />,
      // },
      {
        name: "Department Coordinator",
        link: "AvishkarDC",
        icon: <PiStepsFill />,
      },

      {
        name: "Schedule",
        link: "AvishkarSchedule",
        icon: <FaBook />,
      },
      {
        name: "Event",
        link: "AvishkarEvent",
        icon: <GiPencil />,
      },
      // {
      //   name: "Participant",
      //   link: "AvishkarParticipant",
      //   icon: <GiChart />,
      // },
      {
        name: "Sponsors",
        link: "AvishkarSponsors",
        icon: <PiConfettiFill />,
      },
    ],
  },
  {
    title: "Settings",
    links: [
      {
        name: "Issue",
        icon: <BiHelpCircle />,
      },
      {
        name: "Volunteer",
        icon: <AiOutlineUserAdd />,
      },
    ],
  },
];

export const role = [
  { id: "Admin", role: "Admin" },
  { id: "Coordinator", role: "Coordinator" },
  { id: "User", role: "User" },
];
