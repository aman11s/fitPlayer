import React from "react";
import { RiPlayListAddFill } from "react-icons/ri";
import { BsFillClockFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useAuth, usePlaylistModal } from "../../contexts";
import { constants } from "../../utils";
import "./PopupMenu.css";

export const PopupMenu = ({ videos, setPopupMenuActive }) => {
  const { playlistModalDispatch } = usePlaylistModal();
  const {
    userData: { token },
  } = useAuth();
  const navigate = useNavigate();

  const addToPlaylistOnClickHandler = () => {
    if (token) {
      playlistModalDispatch({
        type: constants.OPEN_P_MODAL,
        payload: { open_modal: true, get_video: videos },
      });
      setPopupMenuActive(false);
    } else {
      navigate("/login", { replace: true });
    }
  };

  return (
    <ul className="popup-menu radius-5 p-2 avoid-text-highlight">
      <li
        onClick={addToPlaylistOnClickHandler}
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
