import React from "react";
import { ImHome } from "react-icons/im";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { RiPlayListAddFill } from "react-icons/ri";
import { AiFillLike } from "react-icons/ai";
import { FaHistory } from "react-icons/fa";
import { BsFillClockFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import "./Sidebar.css";

const sidebarMenu = [
  {
    id: 1,
    icon: <ImHome />,
    name: "Home",
  },
  {
    id: 2,
    icon: <BsFillCameraVideoFill />,
    name: "Videos",
  },
  {
    id: 3,
    icon: <RiPlayListAddFill />,
    name: "Playlists",
  },
  {
    id: 4,
    icon: <AiFillLike />,
    name: "Likes",
  },
  {
    id: 5,
    icon: <BsFillClockFill />,
    name: "Watch Later",
  },
  {
    id: 6,
    icon: <FaHistory />,
    name: "History",
  },
  {
    id: 7,
    icon: <FaUserCircle />,
    name: "Login",
  },
];

export const Sidebar = () => {
  return (
    <>
      <aside className="aside-container aside-height active-sidebar">
        <ul className="avoid-text-highlight">
          {sidebarMenu.map((sidebar) => {
            const { id, icon, name } = sidebar;
            return (
              <li
                key={id}
                className="sidebar-menu m-4 container-flex-align-center"
              >
                <span className="icon mr-1 container-flex-align-center">
                  {icon}
                </span>{" "}
                {name}
              </li>
            );
          })}
        </ul>
      </aside>
      <div className="drop-shadow"></div>
    </>
  );
};
