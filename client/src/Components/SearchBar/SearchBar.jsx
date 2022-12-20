import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogsbyName } from "../../Redux/Actions/index";

export default function SearchBar() {
  const [dogState, setDogState] = useState("");
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    if (!dogState.length) {
      return alert("aun no estas buscando nada...");
    } else {
      dispatch(getDogsbyName(dogState));
      setDogState("");
    }
  }

  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Busca un perro"
        className="inputSearch"
        value={dogState}
        onChange={(e) => {
          setDogState(e.target.value);
        }}
      />
      <button type="submit" onClick={handleClick}>
        <span className="nose">Buscar</span>
      </button>
    </div>
  );
}
