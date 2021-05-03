import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div class="navigation">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
            <div class="logo">
              <a href="index.html">
                <img src={logo}></img>
              </a>
            </div>
          </div>

          <div class="col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right">
            <div class="primary-nav">
              <ul>
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
      </div>
    </div>
  );
}

export default Nav;
