import React from "react";
import "../assets/css/portfolio.css";

function Project(props) {
    return (
        <div class="col">
        <figure class="figure">
          <img src={props.image} class="figure-img img-fluid rounded"
            alt={props.alt} />
          <figcaption class="figure-caption">
          <a className="link" href={props.deploy}>{props.text}</a>
          <br />
          <a className="link" href={props.github}>{props.github}</a>
          </figcaption>
        </figure>
      </div>
    );
};

export default Project;