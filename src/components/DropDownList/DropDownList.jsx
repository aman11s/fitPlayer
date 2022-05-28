import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts";
import { logoutHandler } from "../../services";
import "./DropDownList.css";

export const DropDownList = () => {
  const navigate = useNavigate();
  const { setUserData } = useAuth();

  return (
    <>
      <ul className="drop-down-list radius-5">
        <li className="p-2">
          <button className="list-btn fw-800 cursor-pointer">Profile</button>
        </li>
        <li className="p-2">
          <button
            onClick={() => logoutHandler({ navigate, setUserData })}
            className="list-btn fw-800 cursor-pointer"
          >
            Logout
          </button>
        </li>
      </ul>
    </>
  );
};
