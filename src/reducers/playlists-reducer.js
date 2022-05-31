import { constants } from "../utils";

export const playlistReducer = (state, { type, payload }) => {
  switch (type) {
    case constants.INITIALISE_PLAYLISTS:
      return { ...state, playlists: payload.initialise_playlists };

    default:
      return state;
  }
};
