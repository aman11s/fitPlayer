import React, { useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { useAuth, usePlaylist, usePlaylistModal } from "../../contexts";
import { addNewPlaylistHandler } from "../../services/playlists-services";
import "./PlaylistModal.css";

export const PlaylistModal = () => {
  const { setPlaylistModalActive } = usePlaylistModal();
  const {
    userData: { token },
  } = useAuth();
  const { playlistDispatch } = usePlaylist();

  const [newPlaylist, setNewPlaylist] = useState("");

  const modalOnClickHandler = (e) => {
    if (
      e.target.classList.contains("playlist-modal-wrapper") &&
      e.target.tagName === "DIV"
    ) {
      setPlaylistModalActive(false);
    }
  };

  return (
    <div onClick={modalOnClickHandler} className="playlist-modal-wrapper">
      <form
        onSubmit={(e) =>
          addNewPlaylistHandler({ e, token, newPlaylist, playlistDispatch })
        }
        className="add-playlist-form px-5 py-6 radius-5 container-flex-align-center"
      >
        <span
          onClick={() => setPlaylistModalActive(false)}
          className="close-playlist-modal-icon cursor-pointer"
        >
          <MdClose />
        </span>
        <input
          onChange={(e) => setNewPlaylist(e.target.value)}
          value={newPlaylist}
          type="text"
          placeholder="Add new playlist"
          className="px-2 py-1 input-box"
        />
        <button
          type="submit"
          className="pl-3 icon add-playlist-btn-icon container-flex-align-center cursor-pointer"
        >
          <BsFillPlusCircleFill />
        </button>
      </form>
    </div>
  );
};
