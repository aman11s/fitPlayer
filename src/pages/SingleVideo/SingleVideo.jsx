import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
import { RiPlayListAddFill } from "react-icons/ri";
import { BsFillClockFill } from "react-icons/bs";
import { ClipLoader } from "react-spinners";
import "./SingleVideo.css";

export const SingleVideo = () => {
  const { videoId } = useParams();
  const [singleVideo, setSingleVideo] = useState({});
  const [pageLoader, setPageLoader] = useState(false);

  const { creator, creatorDp, description, title } = singleVideo;

  useEffect(() => {
    (async () => {
      try {
        setPageLoader(true);
        const { data, status } = await axios({
          method: "GET",
          url: `/api/video/${videoId}`,
        });
        if (status === 200) {
          setSingleVideo(data.video);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setPageLoader(false);
      }
    })();
  }, [videoId]);

  if (pageLoader) {
    return (
      <>
        <main className="main-container container-flex-center main-min-height">
          <ClipLoader color="#ef6236" speedMultiplier={2} size={40} />
        </main>
      </>
    );
  }

  return (
    <>
      <main className="p-2 main-container main-min-height">
        <div className="iframe-container">
          <iframe
            src={`https://www.youtube.com/embed/${singleVideo._id}?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3`}
            className="player radius-5"
            title="15 Minute Beginner Weight Training - Easy Exercises - HASfit Beginners Workout Routine - Strength"
            frameBorder="0"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
          ></iframe>
        </div>

        <h4 className="h4 mt-2">{title}</h4>

        <div className="video-details my-2">
          <div className="container-flex-align-center">
            <img
              src={creatorDp}
              alt="avatar"
              className="avatar avatar-sm-size creator-avatar"
            />
            <span className="ml-2">{creator}</span>
          </div>

          <div className="v-controls my-2">
            <button className="btn container-flex-center shadow">
              <AiFillLike />
              <span className="pl-1">Like</span>
            </button>

            <button className="btn container-flex-center shadow">
              <RiPlayListAddFill />
              <span className="pl-1">Playlist</span>
            </button>

            <button className="btn container-flex-center shadow">
              <BsFillClockFill />
              <span className="pl-1">Watch Later</span>
            </button>
          </div>

          <div className="py-2 small-text">{description}</div>
        </div>
      </main>
    </>
  );
};
