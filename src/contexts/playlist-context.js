import { createContext, useContext, useReducer } from "react";
import { playlistReducer } from "../reducers";

const PlaylistContext = createContext(null);

const initialPlaylistState = {
  playlists: [],
};

const PlaylistProvider = ({ children }) => {
  const [playlistState, playlistDispatch] = useReducer(
    playlistReducer,
    initialPlaylistState
  );

  return (
    <PlaylistContext.Provider value={{ playlistState, playlistDispatch }}>
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylist = () => useContext(PlaylistContext);

export { PlaylistProvider, usePlaylist };
