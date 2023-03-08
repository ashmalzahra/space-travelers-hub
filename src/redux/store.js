import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './RocketsSlice'

export const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
  },
});