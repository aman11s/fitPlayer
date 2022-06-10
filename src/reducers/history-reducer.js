import { constants } from "../utils";

export const historyReducer = (state, { type, payload }) => {
  switch (type) {
    case constants.ADD_TO_HISTORY:
      return { ...state, history: payload.add_to_history };

    default:
      return state;
  }
};
