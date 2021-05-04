import React from "react";
import logo from "../../images/logo.svg";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AllActions from "../../Actions/AllActions";

function Nav() {
  const navBarToggle = useSelector((store) => store);
  const dispatch = useDispatch();
  const handelClick = () => {
    dispatch(AllActions.navbarActions.toggleNavBar());
  };
  return (
    <nav className="navBar">
      <img className="navBar__logo" src={logo}></img>

      <div onClick={() => handelClick()} className={`hamburger`}>
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
