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
        <li className="p-2 top-radius-5">Profile</li>
        <li
          onClick={() => logoutHandler({ navigate, setUserData })}
          className="p-2 bottom-radius-5"
        >
          Logout
        </li>
      </ul>
    </>
  );
};
