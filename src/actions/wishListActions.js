const ADD = "ADD_TO_WISHLIST";
const REMOVE = "REMOVE_FROM_WISHLIST";

export const add = product => {
  console.log(ADD);
  return {
    type: ADD,
    payload: product
  };
};

export const remove = id => {
  console.log(REMOVE);
  return {
    type: REMOVE,
    payload: id
  };
};
