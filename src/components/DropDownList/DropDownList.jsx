import React from "react";
import "./DropDownList.css";

export const DropDownList = () => {
  return (
    <>
      <ul className="drop-down-list radius-5">
        <li className="p-2">
          <button className="list-btn fw-800">Profile</button>
        </li>
        <li className="p-2">
          <button className="list-btn fw-800">Logout</button>
        </li>
      </ul>
    </>
  );
};
