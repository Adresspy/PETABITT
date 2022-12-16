import { GET_DOGS } from "../Actions/Constantes/const";
const inicialState = {
  // creo un estado inicial
  dogs: [],
};

const rootReducer = (state = inicialState, action) => {
  switch (
    action.type // evaluo el tipo, es decir que es lo que hace mi action
  ) {
    case GET_DOGS:
      return {
        ...state, // devolvemos lo que ya tenia nuestro estado
        dogs: action.payload, // modificamos dogs con nuestro payload
      };

    default:
      return state;
  }
};

export default rootReducer;
