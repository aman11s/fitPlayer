import axios from "axios";
import toast from "react-hot-toast";
import { constants } from "../utils";

export const addToWatchLaterHandler = async ({
  token,
  video,
  watchLaterDispatch,
}) => {
  try {
    const { data, status } = await axios({
      method: "POST",
      url: "/api/user/watchlater",
      headers: { authorization: token },
      data: { video },
    });
    if (status === 201) {
      watchLaterDispatch({
        type: constants.TOGGLE_WATCH_LATER,
        payload: { toggle_watch_later: data.watchlater },
      });
      toast.success("Added to watch later");
    }
  } catch (e) {
    console.error(e);
  }
};

export const removeFromWatchLaterHandler = async ({
  videoId,
  token,
  watchLaterDispatch,
}) => {
  try {
    const { data, status } = await axios({
      method: "DELETE",
      url: `/api/user/watchlater/${videoId}`,
      headers: { authorization: token },
    });
    if (status === 200) {
      watchLaterDispatch({
        type: constants.TOGGLE_WATCH_LATER,
        payload: { toggle_watch_later: data.watchlater },
      });
      toast.success("Removed from watch later");
    }
  } catch (e) {
    console.error(e);
  }
};
