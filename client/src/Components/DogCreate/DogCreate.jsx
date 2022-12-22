import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments } from "../../Redux/Actions";

export default function DogCreate() {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments); // traigo los temperamentos

  const [input, setInput] = useState({
    name: "",
    min_height: "",
    max_height: "",
    min_weight: "",
    max_weight: "",
    temperament: [],
    life_span: "",
    image: "",
  });

  useEffect(() => {
    dispatch(getTemperaments());
  }, []);

  return (
    <div>
      <Link to="/home">
        <button>Regresar</button>
      </Link>
      <h1>Crea tu personaje!</h1>
      <form>
        <div>
          <label>Nombre</label>
          <input type="text" value={input.name} name="name" />
        </div>
        <div>
          <label>min_height</label>
          <input type="text" value={input.min_height} name="min_height" />
        </div>
        <div>
          <label>max_height</label>
          <input type="text" value={input.max_height} name="max_height" />
        </div>
        <div>
          <label>min_weight</label>
          <input type="text" value={input.min_weight} name="min_weight" />
        </div>
        <div>
          <label>max_weight</label>
          <input type="text" value={input.max_weight} name="max_weight" />
        </div>
        <div>
          <label>image</label>
          <input type="text" value={input.image} name="image" />
        </div>
        <div>
          <label>temperaments</label> <br />
          <select>
            <option value="Todos">All temperaments</option>
            {temperaments.map((el) => {
              <option value={el.name}>{el.name}</option>;
            })}
          </select>
        </div>
      </form>
    </div>
  );
}
