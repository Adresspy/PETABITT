import {
  GET_DOGS,
  GET_TEMPERAMENTS,
  GET_DOGS_BY_NAME,
  ORDER_BY_NAME,
} from "../Actions/Constantes/const";
const inicialState = {
  // creo un estado inicial
  allDogs: [],
  dogs: [],
  temperaments: [],
};

const rootReducer = (state = inicialState, action) => {
  switch (
    action.type // evaluo el tipo, es decir que es lo que hace mi action
  ) {
    case GET_DOGS:
      return {
        ...state, // devolvemos lo que ya tenia nuestro estado
        dogs: action.payload, // modificamos dogs con nuestro payload
        allDogs: action.payload, // creamos otra "copia" de nuestra lista de doguis
      };

    case GET_DOGS_BY_NAME:
      return {
        ...state,
        allDogs: action.payload,
      };

    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };

    case ORDER_BY_NAME:
      const orderArr =
        action.payload === "asc"
          ? [...state.dogs].sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : [...state.dogs].sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        allDogs: orderArr,
      };

    default:
      return state;
  }
};

export default rootReducer;
