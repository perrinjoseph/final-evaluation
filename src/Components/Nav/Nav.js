import React, { useState } from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Nav({ getState }) {
  const [open, setOpen] = useState(false);
  let isOpen = open;
  const handelClick = () => {
    setOpen(!open);
    if (getState) {
      getState(isOpen);
    }
  };
  return (
    <div className={`navigation navigationMenu `}>
      <div className="logo">
        <img src={logo}></img>
        <div
          onClick={handelClick}
          className={`hamburger ${open ? "hamburger-active" : ""}`}
        >
          <div className="hamburger__line"></div>
          <div className="hamburger__line"></div>
          <div className="hamburger__line"></div>
        </div>
      </div>

      <div className="navigationMenu__Links">
        <ul className="navigationMenu__menu">
          <Link
            style={{ textDecoration: "none" }}
            className="navigationMenu__item"
            to="/"
          >
            <li>Home</li>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            className="navigationMenu__item"
            to="/portfolio"
          >
            <li>Portfolio</li>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            className="navigationMenu__item"
            to="/contact"
          >
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Nav;

