export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER_CARDS = "FILTER_CARDS";
export const ORDEN_CARDS = "ORDEN_CARDS";

export const addFav = (character) => {
  return { type: ADD_FAV, payload: character };
};

export const removeFav = (id) => {
  return { type: REMOVE_FAV, payload: id };
};

export const filterCards = (gender) => {
  return { type: FILTER_CARDS, payload: gender };
};

export const orderCards = (orden) => {
  return { type: ORDEN_CARDS, payload: orden };
};
