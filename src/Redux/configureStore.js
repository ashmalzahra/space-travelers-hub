import { combineReducers, configureStore } from "@reduxjs/toolkit";
import missionsReducer from "./MissionsSlice";

 const reducer = combineReducers({
    missionsReducer,
 });

 const store = configureStore({
    reducer,
 });

 export default store;