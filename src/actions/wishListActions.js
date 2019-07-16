const ADD = "ADD";
const REMOVE = "REMOVE";

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
