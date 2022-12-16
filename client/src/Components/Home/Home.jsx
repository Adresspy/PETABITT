import React from "react";
import { useState, useEffect } from "react"; //HOOKS
import { useDispatch, useSelector } from "react-redux"; //HOOKS REACT-REDUX
import { getDogs } from "../../Redux/Actions"; // traemos nuestro getDogs de actions(redux)
import { Link } from "react-router-dom"; // OJO ACA
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";

export default function Home() {
  const dispatch = useDispatch(); // creamos nuestro dispatcheador, que nos permitira conectar con nuestro reducer
  const allDogs = useSelector((state) => state.dogs); // y aca traemos nuestros perros, de nuestro estado (global)

  const [paginaActual, setPaginaActual] = useState(1); // este estado sera el estado de mis paginas
  const [personajePorPagina, setpersonajePorPagina] = useState(8); // este sera el estado de cuantos personajes quiero por pagina
  const indiceLastDog = paginaActual * personajePorPagina; // aca traeremos el indice del ultimo perro que tengamos por pagina. ej pagina 4 = 8*4 = 32 ya que es el ultimo antes de cambiar de pag
  const indiceFirsDog = indiceLastDog - personajePorPagina; // aca traeremos el indice del primer perro por pag ej pagina 4 = 32 - 8 asi nos traeria el primero de cada pag
  const cuentaDogs = allDogs.slice(indiceFirsDog, indiceLastDog); // aca tendremos a todos los perros que tengamos en la pagina, los sacaremos del array de todos los perros, cortandolos con .slice
  const paginado = (pageNumber) => {
    // esta function actualizara nuesta pagina por la que pongamos
    setPaginaActual(pageNumber);
  };

  useEffect(() => {
    dispatch(getDogs()); // dispatcheamos la funcion getDogs, cada vez que
  }, [dispatch]); // lo que incluye en este arreglo es lo que hara que se active nuestro useEffect

  const handleClick = (evento) => {
    // aca lo que hacemos es crear una especie de disparador, que reinicie la peticion a los dogs
    evento.preventDefault(); // pero no reinicia nuestro sitio web
    dispatch(getDogs());
  };

  return (
    <div>
      <Link to="/dogs">Crear Personaje</Link>
      <h1>Pettabit</h1>
      <button onClick={(e) => handleClick(e)}>recargar dogs</button>
      <div>
        <select>
          <option value="ascendente">A - Z</option>
          <option value="descendente">Z - A</option>
        </select>

        <select>
          <option value="to">todos</option>
          <option value="te">temperamento</option>
          <option value="pe">peso</option>
          <option value="es">esperanza de vida</option>
          <option value="ta">tamaño</option>
        </select>

        <select>
          <option value="todos">todos</option>
          <option value="api">api</option>
          <option value="creado">creados</option>
        </select>

        {allDogs?.map((dog) => {
          // para (?) ... si aldogs existe, hago el map
          return (
            <fragment>
              <Link to={"/home/" + dog.id}>
                {/* esto de aca es re importante, lo que hace es crear en nuestras cards, la posibilidad de dar click y re dirigirnos a c/u a una pg nueva con a traves de su id */}
                <Card
                  name={dog.name} // pasamos props
                  image={dog.image} // pasamos props
                  temperament={dog.temperament} // pasamos props
                />
              </Link>
            </fragment>
          );
        })}
      </div>
    </div>
  );
}
