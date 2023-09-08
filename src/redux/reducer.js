import { ADD_FAV, REMOVE_FAV, FILTER_CARDS, ORDEN_CARDS } from "./actions";

const initialState = {
  myFavorites: [],
  allFavorites: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavo2rites: [...state.myFavorites, action.payload],
        allFavorites: [...state.allFavorites, action.payload],
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (char) => char.id !== Number(action.payload)
        ),
      };

    case ORDEN_CARDS:
      let favoritesOrder = state.myFavorites.sort((a, b) => {
        return action.payload === "Ascendente" ? a.id - b.id : b.id - a.id;
      });

      return {
        ...state,
        myFavorites: favoritesOrder,
      };

    case FILTER_CARDS:
      let favoriteFilter =
        action.payload === "All"
          ? state.allFavorites
          : state.allFavorites.filter((char) => char.gender === action.payload);

      return {
        ...state,
        myFavorites: favoriteFilter,
      };

    default:
      return state;
  }
};

export default rootReducer;

// let numeros = [2, 3, 5, 6, 4];
// console.log(numeros.sort((a, b) => a - b));

// let productos = [
//   { id: 4, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "medias", precio: 1000 },
//   { id: 3, nombre: "zapato", precio: 1000 },
//   { id: 1, nombre: "gorra", precio: 1000 },
// ];

// console.log(
//   productos.sort((a, b) => {
//     if (a.nombre > b.nombre) {
//       return 1;
//     }

//     if (a.nombre < b.nombre) {
//       return -1;
//     }

//     return 0;
//   })
// );


// let productos = [
//   { id: 4, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "medias", precio: 1000 },
//   { id: 3, nombre: "zapato", precio: 1000 },
//   { id: 1, nombre: "gorra", precio: 1000 },
// ];
// let filtrados = productos.filter(item => item.id != 3);
// console.log(filtrados);