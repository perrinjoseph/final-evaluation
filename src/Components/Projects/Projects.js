import React, { useRef } from "react";
import Card from "../Card/Card";
import p1 from "../../images/luvtalklogo.png";
import p2 from "../../images/logo.svg";
import p3 from "../../images/mlbproject.png";
import Button from "../Button/Button";

function Projects() {
  const myRef = useRef(null);
  const scroll = () => myRef.current.scrollIntoView();
  return (
    <div className="projects">
      <h1 className="projects__heading__center">
        Projects and Portfolio
        <br></br>
        <small>
          <i>Sharing my endeavors and passions...</i>
        </small>
      </h1>

      <div className="projects__rows projects">
        <Card
          project={true}
          title={"LUV TALK Website"}
          body={
            "Website, created during my first internship, which utilized HTML, CSS, PHP, Ajax, Javascript/jQuery, and Wordpress."
          }
          bg={p1}
        />
        <Card
          project={true}
          title={"Personal Website"}
          body={
            "Enjoyable side project that was created to experiment with more HTML and CSS, but also provided an outlet to showcase my abilities and interests."
          }
          bg={p2}
        />
        <Card
          project={true}
          title={"Strike Zone Analysis"}
          body={
            "Data analytics project completed during my time at the Illinois Math and Science Academy which studied the baseball strike zone based on the state of the game."
          }
          bg={p3}
        />
      </div>
      <div className="center__button">
        <Button scrollTo={0} content={"More Projects"} />
      </div>
    </div>
  );
}

export default Projects;
