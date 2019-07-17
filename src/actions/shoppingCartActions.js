const ADD = "ADD_TO_CART";
const REMOVE = "REMOVE_FROM_CART";

export const addToCart = item => {
  console.log("add");
  return {
    type: ADD,
    payload: item
  };
};

export const removeFromCart = id => {
  console.log("remove");
  return {
    type: REMOVE,
    payload: id
  };
};
