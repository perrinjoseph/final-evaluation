import React from "react";
import logo from "../../../images/logo.svg";
import { Link } from "react-router-dom";

function ResponsiveNav({ change }) {
  return (
    <div className={`resp__nav ${change ? change : ""}`}>
      <ul className="navigationMenu__menu resp__nav__links">
        <Link className="navigationMenu__item" to="/">
          <li>Home</li>
        </Link>
        <Link className="navigationMenu__item" to="/portfolio">
          <li>Portfolio</li>
        </Link>
        <Link className="navigationMenu__item" to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
}

export default ResponsiveNav;
