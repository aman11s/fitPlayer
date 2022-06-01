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
  const {
    playlistState: { playlists },
    playlistDispatch,
  } = usePlaylist();

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
        onSubmit={(e) => {
          addNewPlaylistHandler({ e, token, newPlaylist, playlistDispatch });
          setNewPlaylist("");
        }}
        className="add-playlist-form px-5 py-6 radius-5"
      >
        <span
          onClick={() => setPlaylistModalActive(false)}
          className="close-playlist-modal-icon cursor-pointer"
        >
          <MdClose />
        </span>

        {playlists.map(({ _id, title }) => {
          return (
            <label
              className="px-1 pb-2 container-flex-align-center cursor-pointer"
              key={_id}
            >
              <input type="checkbox" name="playlist" />
              <span className="pl-1">{title}</span>
            </label>
          );
        })}

        <div className="add-playlist-input container-flex-align-center">
          <input
            onChange={(e) => setNewPlaylist(e.target.value)}
            value={newPlaylist}
            type="text"
            placeholder="Add new playlist"
            className="px-2 py-1 input-box"
            required
          />
          <button
            type="submit"
            className="pl-3 icon add-playlist-btn-icon container-flex-align-center cursor-pointer"
          >
            <BsFillPlusCircleFill />
          </button>
        </div>
      </form>
    </div>
  );
};
