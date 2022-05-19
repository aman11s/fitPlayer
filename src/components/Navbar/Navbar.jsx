import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { BiMoon, BiSun } from "react-icons/bi";
import logo from "../../logo.png";
import { useTheme } from "../../contexts";
import "./Navbar.css";

export const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <nav className="nav-bar shadow">
        <div className="left-nav">
          <Link to="/" className="h3 container-flex-align-center">
            <img className="logo mr-1" src={logo} alt="logo" />
            <span className="text-color">fit</span>
            <span className="primary-text-color">Player</span>
          </Link>
        </div>

        <ul className="right-nav container-flex-align-center">
          <li
            onClick={() =>
              setTheme((prev) => (prev === "light" ? "dark" : "light"))
            }
            className="px-2 pt-1 theme-icon"
          >
            {theme === "light" ? <BiMoon /> : <BiSun />}
          </li>
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
