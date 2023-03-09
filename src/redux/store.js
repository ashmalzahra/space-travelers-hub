import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './RocketsSlice'
import missionsReducer from "./MissionsSlice";

export const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
  },
});