export const wishListReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      if (state.findIndex(item => item.id === action.payload.id) >= 0) {
        return state;
      }
      return [...state, action.payload];
    case "REMOVE_FROM_WISHLIST":
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};
