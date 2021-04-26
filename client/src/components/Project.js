import React from "react";

function Project(props) {
    return (
        <div class="col">
        <figure class="figure">
          <img src={props.image} class="figure-img img-fluid rounded"
            alt={props.alt} />
          <figcaption class="figure-caption">
          <a href={props.deploy}>{props.text}</a>
          <br />
          <a href={props.github}>{props.github}</a>
          </figcaption>
        </figure>
      </div>
    );
};

export default Project;