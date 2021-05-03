import React from "react";
import Facebook from "../../images/facebook.svg";
import Linkedin from "../../images/linkedin.svg";
import Pinterest from "../../images/pinterest.svg";
import Email from "../../images/email.svg";

function Footer() {
  return (
    <div class="footer">
      <div className="footer__row">
        <img className="social__icon" src={Facebook}></img>
        <img className="social__icon" src={Linkedin}></img>
        <img className="social__icon" src={Pinterest}></img>
        <img className="social__icon" src={Email}></img>
      </div>
      <div class="col-sm-2 col-md-2 text-center">
        <div class="portfolio-footer">
          <h4>Portfolio</h4>
          <ul>
            <li>Project1</li>
            <li>Project2</li>
            <li>Project3</li>
            <li>See All</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
