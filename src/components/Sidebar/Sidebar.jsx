import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { RiPlayListAddFill } from "react-icons/ri";
import { AiFillLike } from "react-icons/ai";
import { FaHistory } from "react-icons/fa";
import { BsFillClockFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useAuth } from "../../contexts";
import "./Sidebar.css";

const sidebarMenu = [
  {
    id: 1,
    icon: <ImHome />,
    name: "Home",
    page: "/",
  },
  {
    id: 2,
    icon: <BsFillCameraVideoFill />,
    name: "Videos",
    page: "/videos",
  },
  {
    id: 3,
    icon: <RiPlayListAddFill />,
    name: "Playlists",
    page: "/playlists",
  },
  {
    id: 4,
    icon: <AiFillLike />,
    name: "Likes",
    page: "/likes",
  },
  {
    id: 5,
    icon: <BsFillClockFill />,
    name: "Watch Later",
    page: "/watchlater",
  },
  {
    id: 6,
    icon: <FaHistory />,
    name: "History",
    page: "/history",
  },
];

export const Sidebar = ({ pathname, showSidebar }) => {
  const {
    userData: { token },
  } = useAuth();
  const navigate = useNavigate();

  if (pathname !== "/" && pathname !== "/login" && pathname !== "/signup") {
    return (
      <>
        <aside
          className={`aside-container aside-height ${
            showSidebar ? "active" : "inactive"
          }-sidebar`}
        >
          <ul className="avoid-text-highlight">
            {sidebarMenu.map((sidebar) => {
              const { id, icon, name, page } = sidebar;
              return (
                <Link key={id} to={page}>
                  <li className="sidebar-menu cursor-pointer m-4">
                    <span className="icon mr-1 container-flex-align-center">
                      {icon}
                    </span>
                    <span className="text-color side-menu-name">{name}</span>
                  </li>
                </Link>
              );
            })}

            {token ? (
              <li className="sidebar-menu cursor-pointer m-4">
                <span className="icon mr-1 container-flex-align-center">
                  <FiLogOut />
                </span>
                <span className="text-color side-menu-name">Logout</span>
              </li>
            ) : (
              <li
                onClick={() => navigate("/login")}
                className="sidebar-menu cursor-pointer m-4"
              >
                <span className="icon mr-1 container-flex-align-center">
                  <FaUserCircle />
                </span>
                <span className="text-color side-menu-name">Login</span>
              </li>
            )}
          </ul>
        </aside>
        {showSidebar && <div className="drop-shadow"></div>}
      </>
    );
  }
};
