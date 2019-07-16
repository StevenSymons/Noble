export const wishListReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      if (state.findIndex(item => item.id === action.payload.id) >= 0) {
        return state;
      }
      return [...state, action.payload];
    case "REMOVE":
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};
