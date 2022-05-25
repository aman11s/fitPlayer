import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { BiMoon, BiSun } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";
import logo from "../../logo.png";
import { useTheme } from "../../contexts";
import "./Navbar.css";

export const Navbar = ({ setShowSidebar }) => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <nav className="nav-bar avoid-text-highlight shadow">
        <div className="left-nav container-flex-align-center">
          <HiMenu
            onClick={() => setShowSidebar((prev) => !prev)}
            className="ham-menu-icon mx-2"
          />
          <Link to="/" className="h3 container-flex-align-center">
            <img className="logo mr-1" src={logo} alt="logo" />
            <span className="hide text-color">fit</span>
            <span className="hide primary-text-color">Player</span>
          </Link>
        </div>

        <ul className="right-nav container-flex-align-center">
          <li
            onClick={() =>
              setTheme((prev) => (prev === "light" ? "dark" : "light"))
            }
            className="pt-1 theme-icon"
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
