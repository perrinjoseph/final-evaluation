import React from "react";
import Button from "../Button/Button.js";

function Contact() {
  const handelClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact ">
      <h1 className="projects__heading__center">
        Contact
        <br></br>
        <small style={{ fontSize: "20px" }}>
          <i>"XXXX"</i>
        </small>
        <br></br>
        <small style={{ fontSize: "20px" }}>
          <i>"XXXX"</i>
        </small>
      </h1>
      <main className="contact__main">
        <div className="about__main ">
          <h3>Reaching out to me</h3>
          <p>
            Don't be afraid to contact me! I'm happy to answer any questions,
            provide more information, or just have a nice conversation! Fill out
            the form below to being reaching out to me. If you prefer another
            email client other than your default, which will appear after
            clicking the button and have all of the information you just
            entered, you can email me at XXXXX.
          </p>
          <div className="about__main">
            <h3>Contact Information</h3>
            <em>And for those that don't fancy reading:</em>
            <p className="stat__details">
              <small>XXXX</small>
              <br></br>
              <small>XXXX</small>
              <br></br>
              <small>(XXXX)-445-7747</small>
              <br></br>
              <small>XXXXXX@gmail.com</small>
            </p>
          </div>
        </div>
        <div className="about__main">
          <h3>right</h3>
          <form onClick={(e) => handelClick(e)}>
            <div className="row">
              <div className="col-sm-6 col-md-6">
                <div className="firstname">
                  <h4>Full Name *</h4>
                  <input type="text" placeholder="First Name"></input>
                </div>
              </div>

              <div className="col-sm-6 col-md-6">
                <div className="lastname">
                  <h4>Full Name *</h4>
                  <input type="text" placeholder="Last Name"></input>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12 col-md-12">
                <div className="email">
                  <h4>Email *</h4>
                  <input type="text" placeholder="Email"></input>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12 col-md-12">
                <div className="message">
                  <h4>Message *</h4>
                  <textarea placeholder="Message"></textarea>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4">
                <div className="">
                  <Button scrollTo={0} content={"Submit"} />
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Contact;
