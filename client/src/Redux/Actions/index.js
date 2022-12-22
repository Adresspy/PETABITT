import {
  GET_DOGS,
  FILTER_DOGS_BY_TEMPERAMENT,
  GET_TEMPERAMENTS,
  GET_DOGS_BY_NAME,
  ORDER_BY_NAME,
  FILTER_DOG_CREATED,
  CREATE_DOG,
} from "./Constantes/const";
import axios from "axios";
//Aca hacemos nuestras action, para luego pasarlas al reducer

export function getDogs() {
  // conexion con nuestro back
  return async function (dispatch) {
    // funcion asincrona
    let dogs = await axios.get("http://localhost:3001/dogs");

    return dispatch({
      type: GET_DOGS,
      payload: dogs.data,
    });
  };
}

export function getDogsbyName(name) {
  return async function (dispatch) {
    const dogs = await axios.get(`http://localhost:3001/dogs?name=${name}`);
    return dispatch({
      type: GET_DOGS_BY_NAME,
      payload: dogs.data,
    });
  };
}

export function getTemperaments() {
  return async function (dispatch) {
    let temperaments = await axios.get("http://localhost:3001/temperaments");
    let temperamentList = temperaments.data.map((el) => el.name);
    return dispatch({
      type: GET_TEMPERAMENTS,
      payload: temperamentList,
    });
  };
}

export function PostCreateDog(payload) {
  return async function (dispatch) {
    const data = axios.post("http://localhost:3001/dogs", payload);
    console.log(data);
    return data;
  };
}

export function getDogsByTemperament(payload) {
  return {
    type: FILTER_DOGS_BY_TEMPERAMENT,
    payload,
  };
}

export function orderName(payload) {
  // nuestro payload sera la opcion que elijamos
  // dependiendo del payload
  return {
    type: ORDER_BY_NAME,
    payload,
  };
}

export function filterCreated(payload) {
  // nuestro payload sera la opcion que elijamos
  // dependiendo del payload
  return {
    type: FILTER_DOG_CREATED,
    payload,
  };
}
