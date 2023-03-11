import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './Rockets/RocketsSlice';
import missionsSlice from './MissionsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsSlice.reducer,
  },
});

export default store;
