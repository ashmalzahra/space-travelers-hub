import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/rockets';

const initialState = {
  rockets: [],
  ifSucceed: false,
  isLoading: false,
  error: null,
};

const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async () => {
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      return error.message;
    }
  },
);

const RocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const newArray = state.rockets.map((item) => {
        if (item.rocket_id === action.payload) {
          return { ...item, reserved: true };
        }
        return item;
      });
      return { ...state, rockets: newArray };
    },
    cancelReserveRocket: (state, action) => {
      const newArray = state.rockets.map((item) => {
        if (item.rocket_id === action.payload) {
          return { ...item, reserved: false };
        }
        return item;
      });
      return { ...state, rockets: newArray };
    },
  },
  extraReducers: {
    [fetchRockets.pending]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [fetchRockets.fulfilled]: (state, action) => ({
      ...state,
      isLoading: false,
      ifSucceed: true,
      rockets: action.payload,
    }),
    [fetchRockets.rejected]: (state) => ({
      ...state,
      isLoading: false,
    }),
  },
});

export const { reserveRocket, cancelReserveRocket } = RocketsSlice.actions;
export { fetchRockets };
export default RocketsSlice.reducer;
