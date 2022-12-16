import React from "react";
// paso por props
export default function Paginado({ personajePorPagina, allDogs, paginado }) {
  const numeroDePaginas = [];

  for (let i = 0; i <= Math.cell(allDogs / personajePorPagina); i++) {
    numeroDePaginas.push(i);
  }

  return (
    <nav>
      <ul className="paginado">
        {numeroDePaginas?.map((n) => {
          <li className="number" key={n}>
            <a onClick={() => paginado(n)}>{n}</a>;
          </li>;
        })}
      </ul>
    </nav>
  );
}
