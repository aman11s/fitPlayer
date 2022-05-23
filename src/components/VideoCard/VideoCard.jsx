import React from "react";
import "./VideoCard.css";
import { FiMoreVertical } from "react-icons/fi";

export const VideoCard = ({ thumbnailSrc }) => {
  return (
    <>
      <div className="video-card radius-5">
        <div className="vcard-head">
          <img className="img-responsive" src={thumbnailSrc} alt="thumbnail" />
        </div>
        <div className="vcard-body p-1">
          <h6 className="h6">15 Minute Beginner Weight Training...</h6>
        </div>
        <div className="vcard-footer p-1 container-flex-align-center">
          <img
            src="https://yt3.ggpht.com/ytc/AKedOLS8yUsoZP_JJAAdCc7AFQXutrv1tcblzl6JCS5yIQ=s48-c-k-c0x00ffffff-no-rj"
            alt="avatar"
            className="avatar avatar-xs-size creator-avatar"
          />
          <span className="small-text ml-2">HASfit</span>
          <FiMoreVertical className="more-icon mr-1" />
        </div>
      </div>
    </>
  );
};
