import React from "react";
import { usePlaylist } from "../../contexts";
import { PlaylistCard } from "../../components";

export const Playlists = () => {
  const {
    playlistState: { playlists },
  } = usePlaylist();

  return (
    <>
      <main className="main-container main-min-height">
        <div className="grid-minmax-card m-4">
          {playlists.map((playlists) => {
            return <PlaylistCard {...playlists} />;
          })}
        </div>
      </main>
    </>
  );
};
