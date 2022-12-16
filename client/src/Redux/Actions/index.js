import { GET_DOGS } from "./Constantes/const";
import axios from "axios";
//Aca hacemos nuestras action, para luego pasarlas al reducer

export function getDogs() {
  // conexion con nuestro back
  return async function (dispatch) {
    // funcion asincrona
    let json = await axios.get("http://localhost:3001/dogs/");
    return dispatch({
      type: GET_DOGS,
      payload: json.data,
    });
  };
}
