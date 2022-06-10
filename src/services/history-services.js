import axios from "axios";
import { constants } from "../utils";

export const addToHistory = async ({ token, videos, historyDispatch }) => {
  try {
    const { data, status } = await axios({
      method: "POST",
      url: "/api/user/history",
      headers: { authorization: token },
      data: { video: videos },
    });
    if (status === 201) {
      historyDispatch({
        type: constants.ADD_TO_HISTORY,
        payload: { add_to_history: data.history },
      });
    }
  } catch (e) {
    console.error(e);
  }
};
