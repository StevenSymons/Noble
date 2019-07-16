import { combineReducers } from "redux";
import { wishListReducer } from "./wishListReducer";

export const reducers = combineReducers({ wishList: wishListReducer });
