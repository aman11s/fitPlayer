import React from "react";
import { RiPlayListAddFill } from "react-icons/ri";
import { BsFillClockFill } from "react-icons/bs";
import "./PopupMenu.css";
import { usePlaylistModal } from "../../contexts";

export const PopupMenu = ({ setPopupMenuActive }) => {
  const { setPlaylistModalActive } = usePlaylistModal();

  return (
    <ul className="popup-menu radius-5 p-2 avoid-text-highlight">
      <li
        onClick={() => {
          setPlaylistModalActive(true);
          setPopupMenuActive(false);
        }}
        className="menu-list p-1 cursor-pointer mb-1 radius-5 container-flex-align-center"
      >
        <RiPlayListAddFill /> <span className="pl-1">Add to playlist</span>
      </li>
      <li className="menu-list p-1 cursor-pointer radius-5 container-flex-align-center">
        <BsFillClockFill /> <span className="pl-1">Add to watch later</span>
      </li>
    </ul>
  );
};
