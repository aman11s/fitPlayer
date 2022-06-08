import React, { useState } from "react";
import "./VideoCard.css";
import { shortStr } from "../../utils";
import { PopupMenu } from "../../components";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const VideoCard = ({ videos, trashIcon, removeHandler }) => {
  const { _id, creator, creatorDp, thumbnail, title } = videos;
  const navigate = useNavigate();

  const [popupMenuActive, setPopupMenuActive] = useState(false);

  return (
    <>
      <div className="video-card radius-5">
        <div onClick={() => navigate(`/videos/${_id}`)} className="vcard-head">
          <img
            className="img-responsive cursor-pointer"
            src={thumbnail}
            alt="thumbnail"
          />
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
          {trashIcon ? (
            <button
              onClick={removeHandler}
              className="trash-btn-icon cursor-pointer px-2"
            >
              <FaTrashAlt />
            </button>
          ) : (
            <div className="vcard-menu">
              <i
                onClick={() => setPopupMenuActive(!popupMenuActive)}
                className="bx bx-dots-vertical-rounded cursor-pointer more-icon mr-1 p-1"
              ></i>
              {popupMenuActive && (
                <PopupMenu
                  videos={videos}
                  setPopupMenuActive={setPopupMenuActive}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
