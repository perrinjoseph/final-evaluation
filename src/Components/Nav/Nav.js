import React from "react";
import logo from "../../images/logo.svg";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navBar">
      <img clasName="navBar__logo" src={logo}></img>

      <div className={`hamburger`}>
        <div className="hamburger__line"></div>
        <div className="hamburger__line"></div>
        <div className="hamburger__line"></div>
      </div>

      <section className="navBar__links">
        <div>
          <NavLink style={{ textDecoration: "none" }} to="/">
            <span className="navBar__item">Home</span>
          </NavLink>
        </div>
        <div>
          <NavLink style={{ textDecoration: "none" }} to="/portfolio">
            <span className="navBar__item">Portfolio</span>
          </NavLink>
        </div>
        <div>
          <NavLink style={{ textDecoration: "none" }} to="/contact">
            <span className="navBar__item">Contact</span>
          </NavLink>
        </div>
      </section>
    </nav>
  );
}

export default Nav;
{
  /* <div className={`hamburger`}>
          <div className="hamburger__line"></div>
          <div className="hamburger__line"></div>
          <div className="hamburger__line"></div>
        </div> */
}
