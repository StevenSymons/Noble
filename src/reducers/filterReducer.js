export const filterReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_BASE_FILTER":
      console.log("ADD_FILTER");
      state = [];
      return [...state, action.payload];
    case "ADD_EXTRA_FILTER":
      return [...state, action.payload];
    case "REMOVE_ALL_FILTERS":
      return (state = []);
    default:
      return state;
  }
};
