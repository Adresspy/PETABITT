import React from "react";

export default function Card({ name, image, temperament }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{temperament}</h2>
      <img src={image} alt={`imagen de un ${name}`} width="500" height="400" />
    </div>
  );
}
