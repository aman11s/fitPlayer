import { constants } from "../utils";

export const playlistReducer = (state, { type, payload }) => {
  switch (type) {
    case constants.INITIALISE_PLAYLISTS:
      return { ...state };

    default:
      return state;
  }
};
