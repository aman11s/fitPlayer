import React from "react";
import { ChipSection, VideoCard } from "../../components";
import "./Videos.css";

export const Videos = () => {
  return (
    <>
      <main className="main-container">
        <div className="m-3 container-flex">
          <ChipSection />
        </div>
        <div className="grid-minmax-card m-4">
          <VideoCard
            thumbnailSrc={
              "https://i3.ytimg.com/vi/U0bhE67HuDY/maxresdefault.jpg"
            }
          />
          <VideoCard
            thumbnailSrc={
              "https://i3.ytimg.com/vi/U0bhE67HuDY/maxresdefault.jpg"
            }
          />
          <VideoCard
            thumbnailSrc={
              "https://i3.ytimg.com/vi/U0bhE67HuDY/maxresdefault.jpg"
            }
          />
          <VideoCard
            thumbnailSrc={
              "https://i3.ytimg.com/vi/U0bhE67HuDY/maxresdefault.jpg"
            }
          />
        </div>
      </main>
    </>
  );
};
