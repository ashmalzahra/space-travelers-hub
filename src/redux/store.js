import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './RocketsSlice';
import missionsSlice from './MissionsSlice';
// import missionsReducer from "./MissionsSlice";

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsSlice.reducer,
  },
});

export default store;
