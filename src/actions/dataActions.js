const CHANGE_INDEX = "CHANGE_INDEX";

export const changeIndex = index => {
  console.log("Index changing");
  return {
    type: CHANGE_INDEX,
    payload: index
  };
};
