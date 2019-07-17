const ADD_BASE_FILTER = "ADD_BASE_FILTER";
const ADD_EXTRA_FILTER = "ADD_EXTRA_FILTER";
const REMOVE_ALL_FILTERS = "REMOVE_ALL_FILTERS";

export const addBaseFilter = filter => {
  console.log("adding filter");
  return {
    type: ADD_BASE_FILTER,
    payload: filter
  };
};

export const addExtraFilter = filter => {
  console.log("adding extra filter");
  return {
    type: ADD_EXTRA_FILTER,
    payload: filter
  };
};

export const removeAllFilters = () => {
  console.log("removing all filters");
  return {
    type: REMOVE_ALL_FILTERS
  };
};
