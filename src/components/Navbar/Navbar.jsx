import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import logo from "../../logo.png";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <nav className="nav-bar shadow">
        <div className="left-nav">
          <Link className="h3 container-flex-align-center" to="/">
            <img className="logo mr-1" src={logo} alt="logo" />
            <span className="seconday-text-color">fit</span>
            <span className="primary-text-color">Player</span>
          </Link>
        </div>

        <ul className="right-nav">
          <li>
            <Link
              to="/"
              className="btn primary-solid-btn container-flex-align-center"
            >
              <FaUserCircle className="mr-1" />
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
