import React, { useState } from "react";

function Card({ project }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`card ${flipped ? "flipped" : ""}`} onClick={handleFlip}>
      <div className="card-inner">
        <div className="card-front">
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
        <div className="card-back">
          <img src={project.image} alt={`${project.title} screenshot`} />
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            Visit Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
