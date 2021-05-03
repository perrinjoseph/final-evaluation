import React from "react";
import Button from "../Button/Button";

function Landing() {
  return (
    <div class="main">
      <section className="main__content">
        <h1 id="hello">Hello, Im</h1>
        <h1 id="name">XXX</h1>
        <h1 id="person-description">
          UI Developer. UX Desinger. Problem Solver.
        </h1>
        <Button content={"Info"} />
        <Button content={"Portfolio"} />
      </section>
    </div>
  );
}

export default Landing;
