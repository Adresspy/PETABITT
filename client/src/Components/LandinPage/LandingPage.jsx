import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <h1>PETTABIT</h1>
      <Link to="/home">
        <button>INGRESAR</button>
      </Link>
    </div>
  );
}
