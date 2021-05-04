import React from "react";
import Button from "../Button/Button";

function About() {
  return (
    <div className="about">
      <div className="about__content">
        <h1 className="content__heading">About Me</h1>
        <h3 className="content__heading">
          <i>Sharing a little bit of my story...</i>
        </h3>
        <div className="about__main">
          <h3>General Questions</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
        </div>
        <div className="about__main">
          <h3>Statistics</h3>
          <em>And for those that don't fancy reading:</em>
          <p className="stat__details">
            Male, 200 years old.<br></br>
            Five feet 110 inches<br></br>
            Favorite fonts:Roboto <br></br>
            Loves to learn new things
          </p>
        </div>

        <Button scrollTo={3340} content={"Contact"} opposite={true} />
      </div>
    </div>
  );
}

export default About;
{
  /* <div class="row">
          <div class="statistic-row">
            <div class="about-statistic-description">
              <div class="col-sm-8 col-md-8">
                <h2>Statistics</h2>
                <h5>
                  <em>And for those that don't fancy reading:</em>
                </h5>
              <br></br>

              <p>Male, 200 years old.</p>
              <p>Five feet 110 inches</p>
              <p>Favorite fonts:Roboto </p>
              <p>Loves to learn new things</p>
            </div>
          </div>
        </div> */
}
