import React from "react";
import Button from "../Button/Button";

function Card({ title, body, image, project, bg }) {
  switch (project) {
    case true:
      return (
        <article
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)),
        url(${bg})`,
          }}
          className="project--card"
        >
          <h3 className="main__content">{title}</h3>
          <p className="content__heading">{body}</p>
          <Button content={"More"}/>
        </article>
      );
    default:
      return (
        <div className="cardglobal">
          <img className="cardglobal__img" src={image}></img>
          <section>
            <h3>{title}</h3>
            <p>{body}</p>
          </section>
        </div>
      );
  }
}

export default Card;
