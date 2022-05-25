import React from "react";
import "./VideoCard.css";
import { FiMoreVertical } from "react-icons/fi";
import { shortStr } from "../../utils";

export const VideoCard = ({ videos }) => {
  const { creator, creatorDp, thumbnail, title } = videos;

  return (
    <>
      <div className="video-card radius-5">
        <div className="vcard-head">
          <img className="img-responsive" src={thumbnail} alt="thumbnail" />
        </div>
        <div className="vcard-body p-1">
          <h6 className="h6">{shortStr(title)}</h6>
        </div>
        <div className="vcard-footer p-1 container-flex-align-center">
          <img
            src={creatorDp}
            alt="avatar"
            className="avatar avatar-xs-size creator-avatar"
          />
          <span className="ml-2">{shortStr(creator)}</span>
          <FiMoreVertical className="more-icon mr-1" />
        </div>
      </div>
    </>
  );
};
