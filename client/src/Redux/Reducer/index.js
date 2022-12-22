import {
  GET_DOGS,
  GET_TEMPERAMENTS,
  GET_DOGS_BY_NAME,
  ORDER_BY_NAME,
  FILTER_DOG_CREATED,
  FILTER_DOGS_BY_TEMPERAMENT,
  CREATE_DOG,
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
        allDogs: action.payload, // este sera nuestro primer estado, el estado "completo"
        dogs: action.payload, // creamos otra "copia" de nuestra lista de doguis, donde se haran filtros
      };

    case GET_DOGS_BY_NAME:
      return {
        ...state,
        dogs: action.payload,
      };

    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };

    case FILTER_DOGS_BY_TEMPERAMENT:
      const dogTemperament = state.allDogs.filter((dog) =>
        dog.temperament?.includes(action.payload) ? dog : null
      );
      return {
        ...state,
        dogs:
          action.payload === "AllTemperaments" ? state.allDogs : dogTemperament,
      };

    case CREATE_DOG:
      return {
        ...state,
      };

    case ORDER_BY_NAME:
      const orderArr =
        action.payload === "asc"
          ? [...state.allDogs].sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : [...state.allDogs].sort(function (a, b) {
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
        dogs: orderArr,
      };

    case FILTER_DOG_CREATED:
      const createdFilter =
        action.payload === "Created"
          ? state.allDogs.filter((ele) => ele.createInDb)
          : state.allDogs.filter((ele) => !ele.createInDb);

      return {
        ...state,
        dogs: createdFilter,
      };

    default:
      return state;
  }
};

export default rootReducer;
