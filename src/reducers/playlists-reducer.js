import { constants } from "../utils";

export const playlistReducer = (state, { type, payload }) => {
  switch (type) {
    case constants.INITIALISE_PLAYLISTS:
      return { ...state, playlists: payload.initialise_playlists };

    case constants.UPDATE_PLAYLISTS:
      return { ...state, playlists: payload.update_playlist };

    default:
      return state;
  }
};
