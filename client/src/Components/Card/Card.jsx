import React from "react";

export default function Card({
  name,
  image,
  temperament,
  min_weight,
  max_weight,
}) {
  return (
    <div>
      <h1>{`nombre: ${name}`}</h1>
      <h2>{`temperamento: ${temperament}`}</h2>
      <h3>{`peso minimo: ${min_weight}KG`}</h3>
      <h3>{`peso maximo: ${max_weight}KG`}</h3>
      <img src={image} alt={`imagen de un ${name}`} width="500" height="400" />
    </div>
  );
}
