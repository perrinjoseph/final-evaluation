import React from "react";
import Card from "../Card/Card";
import DeveloperDesign from "../../images/developerdesign.svg";
import ResponsiveDesign from "../../images/responsivedesign.svg";
import Inovations from "../../images/innovativesolutions.svg";
import Passion from "../../images/passion.svg";

function Info() {
  return (
    <div class="summary">
      <div className="summary__row">
        <Card
          body={
            "I aim to put my creativity to the test, designing and building unique, meaningful products for clients or merely for my own interests."
          }
          title={"Development and Design"}
          image={DeveloperDesign}
        />
        <Card
          body={
            "I aim to put my creativity to the test, designing and building unique, meaningful products for clients or merely for my own interests."
          }
          title={"Responsive Layouts"}
          image={ResponsiveDesign}
        />
      </div>
      <div className="summary__row">
        <Card
          body={
            "There are still many problems that exist in today's society, including laziness. Luckily, I hope to combat these issues by innovating, developing easy-to-use programs, solutions, or products."
          }
          title={"Ideas and Solutions"}
          image={Inovations}
        />
        <Card
          body={
            "With my profound interest and commitment to my field of study, my projects rarely go unfinished and my problems are never left unresolved. "
          }
          title={"Passion and Dedication"}
          image={Passion}
        />
      </div>
    </div>
  );
}

export default Info;
