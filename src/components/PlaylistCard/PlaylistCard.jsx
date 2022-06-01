import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { RiPlayListAddFill } from "react-icons/ri";
import "./PlaylistCard.css";

export const PlaylistCard = ({ _id, title, videos }) => {
  return (
    <>
      <div key={_id} className="playlist-card radius-5">
        <div className="playlist-card-body p-2">
          <div className="playlist-card-img-overlay">
            <div className="playlist-overlay-text container-flex-center">
              <span className="medium-text">{videos.length}</span>
              <span className="playlist-icon">
                <RiPlayListAddFill />
              </span>
            </div>
          </div>
          <div className="playlist-card-actions pt-2 container-flex">
            <h6 className="h6">{title}</h6>
            <button className="trash-btn-icon">
              <FaTrashAlt />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
