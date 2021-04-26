import React from "react";

function Project(props) {
    return (
        <div class="col">
        <figure class="figure">
          <img src={props.image} class="figure-img img-fluid rounded"
            alt={props.alt} />
          <figcaption class="figure-caption"><a href={props.github}>Link to Travel
              Buddy</a>
          </figcaption>
        </figure>
      </div>
    );
};

export default Project;