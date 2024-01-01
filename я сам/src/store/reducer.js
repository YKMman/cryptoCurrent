// combine Reducer
import { combineReducers } from "@reduxjs/toolkit";

// reducer
import usdtReducer from "./usdt/usdtSlice";
import userReducer from "./user/userSlice";

export const rootReducer = combineReducers({
    usdt: usdtReducer,
    user: userReducer
})