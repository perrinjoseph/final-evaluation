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
{
  /* <div className="container-fluid ">
        <div className="row navLinks">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
            <div className="logo">
              <a href="index.html">
                <img src={logo}></img>
              </a>
            </div>
          </div>

          <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right">
            <div className="primary-nav">
              <ul className="">
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/portfolio">
                  <li>Portfolio</li>
                </Link>
                <Link to="/contact">
                  <li>Contact</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div> */
}
