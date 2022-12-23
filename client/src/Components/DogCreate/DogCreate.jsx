import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments, PostCreateDog } from "../../Redux/Actions";

export default function DogCreate() {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments); // traigo los temperamentos
  const history = useHistory(); // UseHistory me re dirige a la pagina que yo le ponga
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

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value, // modificamos nuestro estado y le pasamos al name de nuestros inputs, el valor del evento que nos esta llegando, de esta forma todo se va actualizando constantemente
    });
  } // este handleChange actualizara todos nuestros inputs

  function handleSelect(e) {
    setInput({
      ...input, // esta funcion seteara a nuestro temperament de el estado imput, lo que pasemos por value en nuestras options
      temperament: [...input.temperament, e.target.value], // devuelve lo que ya tenia, mas el valor del value
    });
  }

  function handleSubmit(e) {
    // esta funcion mandara todo nuestro input a nuestra funcion creadora
    e.preventDefault();
    console.log(input);
    dispatch(PostCreateDog(input));
    alert("perro nuevo!");
    setInput({
      // seteamos el estado en 0 again
      name: "",
      min_height: "",
      max_height: "",
      min_weight: "",
      max_weight: "",
      temperament: [],
      life_span: "",
      image: "",
    });
    history.push("/home"); // este nos re-dirigira al componente home, al terminar
  }

  return (
    <div>
      <Link to="/home">
        <button>Regresar</button>
      </Link>
      <h1>Crea tu personaje!</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Nombre</label>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            value={input.name}
            name="name"
          />
        </div>
        <div>
          <label>min_height</label>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            value={input.min_height}
            name="min_height"
          />
        </div>
        <div>
          <label>max_height</label>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            value={input.max_height}
            name="max_height"
          />
        </div>
        <div>
          <label>min_weight</label>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            value={input.min_weight}
            name="min_weight"
          />
        </div>
        <div>
          <label>max_weight</label>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            value={input.max_weight}
            name="max_weight"
          />
        </div>
        <div>
          <label>image</label>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            value={input.image}
            name="image"
          />
        </div>
        <div>
          <label>temperaments</label> <br />
          <select
            onChange={(e) => {
              handleSelect(e);
            }}>
            {/* <option value="Todos">All temperaments</option> */}
            {temperaments.map((el) => {
              return <option value={el}>{el}</option>;
            })}
          </select>
          <ul>
            <li>{input.temperament.map((el) => el + ", ")}</li>{" "}
            {/*lo que hago aca, es crear una lista desordenada, que lo que hara es renderizar en pantalla, cada una de las opciones que yo vaya escogiendo en mis options de temperament*/}
          </ul>
          <button type="submit">Crear dogi </button>
        </div>
      </form>
    </div>
  );
}
