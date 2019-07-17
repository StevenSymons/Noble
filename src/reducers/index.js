import { combineReducers } from "redux";
import { wishListReducer } from "./wishListReducer";
import { shoppingCartReducer } from "./shopingCartReducer";
import { dataReducer } from "./dataReducer";
import { filterReducer } from "./filterReducer";

export const reducers = combineReducers({
  wishList: wishListReducer,
  shoppingCart: shoppingCartReducer,
  data: dataReducer,
  filters: filterReducer
});
