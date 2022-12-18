import "../Paginado/Paginado.css";
// paso por props
export default function Paginado({ personajePorPagina, allDogs, paginado }) {
  const numeroDePaginas = [];

  for (let i = 1; i <= Math.ceil(allDogs / personajePorPagina); i++) {
    // lo que hara esta logica, es darnos el numero de paginas que tendremos en nuestro array
    numeroDePaginas.push(i);
  }

  return (
    <nav>
      <ul className="paginado">
        {numeroDePaginas?.map((number) => {
          return (
            <li className="number">
              <button onClick={() => paginado(number)}>{number}</button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
