import axios from "axios";
import { constants } from "../utils";

export const toggleLikeHandler = async ({
  token,
  singleVideo,
  setDisableBtn,
  likeDispatch,
}) => {
  try {
    setDisableBtn(true);
    const { data, status } = await axios({
      method: "POST",
      url: "/api/user/likes",
      headers: { authorization: token },
      data: { video: singleVideo },
    });
    if (status === 201) {
      likeDispatch({
        type: constants.TOGGLE_LIKE,
        payload: { toggle_like: data.likes },
      });
    }
  } catch (e) {
    console.error(e);
  } finally {
    setDisableBtn(false);
  }
};
