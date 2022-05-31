import { createContext, useState, useContext } from "react";

const PlaylistModalContext = createContext(null);

const PlaylistModalProvider = ({ children }) => {
  const [playlistModalActive, setPlaylistModalActive] = useState(false);
  return (
    <PlaylistModalContext.Provider
      value={{ playlistModalActive, setPlaylistModalActive }}
    >
      {children}
    </PlaylistModalContext.Provider>
  );
};

const usePlaylistModal = () => useContext(PlaylistModalContext);

export { PlaylistModalProvider, usePlaylistModal };
