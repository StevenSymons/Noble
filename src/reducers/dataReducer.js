export const dataReducer = (state = 0, action) => {
  switch (action.type) {
    case "CHANGE_INDEX":
      return (state = action.payload);
    default:
      return state;
  }
};
