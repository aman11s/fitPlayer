import React from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { usePlaylistModal } from "../../contexts";
import "./PlaylistModal.css";

export const PlaylistModal = () => {
  const { setPlaylistModalActive } = usePlaylistModal();

  return (
    <div
      onClick={() => setPlaylistModalActive(false)}
      className="playlist-modal-wrapper"
    >
      <form className="add-playlist-form px-5 py-6 radius-5 container-flex-align-center">
        <span
          onClick={() => setPlaylistModalActive(false)}
          className="close-playlist-modal-icon cursor-pointer"
        >
          <MdClose />
        </span>
        <input
          onClick={(e) => e.stopPropagation()}
          type="text"
          placeholder="Add new playlist"
          className="px-2 py-1 input-box"
        />
        <button className="pl-3 icon add-playlist-btn-icon container-flex-align-center cursor-pointer">
          <BsFillPlusCircleFill />
        </button>
      </form>
    </div>
  );
};
