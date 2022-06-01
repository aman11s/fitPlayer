import axios from "axios";
import { constants } from "../utils";
import toast from "react-hot-toast";

export const addNewPlaylistHandler = async ({
  e,
  token,
  newPlaylist,
  playlistDispatch,
}) => {
  e.preventDefault();
  try {
    const { data, status } = await axios({
      method: "POST",
      url: "/api/user/playlists",
      headers: { authorization: token },
      data: { playlist: { title: newPlaylist } },
    });
    if (status === 201) {
      playlistDispatch({
        type: constants.UPDATE_PLAYLISTS,
        payload: { update_playlist: data.playlists },
      });
      toast.success("New playlist created");
    }
  } catch (e) {
    console.error(e);
  }
};